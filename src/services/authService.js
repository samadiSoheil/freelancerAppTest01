import Http from "./httpService";

export const getOtp = (userNumber) => {
  return Http.post("/user/get-otp", userNumber).then(({ data }) => data.data);
};

export const checkOtp = (data) => {
  return Http.post("/user/check-otp", data).then(({ data }) => data.data);
};

export const completeProfile = (data) => {
  return Http.post("/user/complete-profile", data).then(({ data }) => data.data);
};

export const getUser = () => {
  return Http.get("/user/profile").then(({ data }) => data.data);
};

export const logoutUser = () => {
  return Http.post("/user/logout").then(({ data }) => data.data);
};
