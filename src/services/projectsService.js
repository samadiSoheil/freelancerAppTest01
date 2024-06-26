import Http from "./httpService";

export const getAllOwnerProjects = () => {
  return Http.get("/project/owner-projects").then(({ data }) => data.data);
};

export const deleteOwnerProject = (id) => {
  return Http.delete(`/project/${id}`).then(({ data }) => data.data);
};
