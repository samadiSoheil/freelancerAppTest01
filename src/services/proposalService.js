import Http from "../services/httpService";

export const setProposalStatus = ({ id, data }) => {
  return Http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
};

export const getAllProposals = () => {
  return Http.get("/proposal/list").then(({ data }) => data.data);
};
