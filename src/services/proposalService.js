import Http from "../services/httpService";

export const changeProposalStatusApi = ({ proposalId, ...rest }) => {
  return Http.patch(`/proposal/${proposalId}`, rest).then(({ data }) => data.data);
};

export const getAllProposals = () => {
  return Http.get("/proposal/list").then(({ data }) => data.data);
};

export const createProposal = (data) => {
  return Http.post("/proposal/add", data).then(({ data }) => data.data);
};
