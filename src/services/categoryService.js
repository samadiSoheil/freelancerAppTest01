import Http from "./httpService";

export const getAllCategorys = () => {
  return Http.get("/category/list").then(({ data }) => data.data);
};
