import axios from "axios";

const app = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

const Http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

app.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalConfig = error.config;
    if (error.response.status == 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get("http://localhost:5000/api/user/refresh-token", {
          withCredentials: true,
        });
        if (data) return app(originalConfig);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);
export default Http;
