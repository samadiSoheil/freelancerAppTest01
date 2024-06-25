import Http from "./httpService";

export const getAllOwnerProjects = () => {
  return Http.get("/project/owner-projects").then(({ data }) => data.data);
};
