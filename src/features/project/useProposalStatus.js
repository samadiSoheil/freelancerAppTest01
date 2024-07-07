import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { changeProposalStatusApi } from "../../services/proposalService";

const useProposalStatus = () => {
  const { mutate: changingProposalStatusFun, isPending: isChangeStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isChangeStatus, changingProposalStatusFun };
};

export default useProposalStatus;
