import Http from "./httpService";

export const getAllOwnerProjects = () => {
  return Http.get("/project/owner-projects").then(({ data }) => data.data);
};

export const deleteOwnerProject = (id) => {
  return Http.delete(`/project/${id}`).then(({ data }) => data.data);
};

export const createProject = (data) => {
  return Http.post("/project/add", data).then(({ data }) => data.data);
};

export const editProject = ({ id, newProject }) => {
  return Http.patch(`/project/update/${id}`, newProject).then(({ data }) => data.data);
};

export const toggleProjectStatus = ({ id, toggeledProject }) => {
  return Http.patch(`/project/${id}`, toggeledProject).then(({ data }) => data.data);
};

export const getProject = (id) => {
  return Http.get(`/project/${id}`).then(({ data }) => data.data);
};

export const getAllProjects = (searchQuery) => {
  return Http.get(`/project/list${searchQuery}`).then(({ data }) => data.data);
};
