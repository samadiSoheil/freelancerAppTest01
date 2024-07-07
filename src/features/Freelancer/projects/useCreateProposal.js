import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createProposal } from "../../../services/proposalService";

const useCreateProposal = () => {
  const queryClient = useQueryClient();
  const { mutate: sendProposalFn, isPending: isSendingProposal } = useMutation({
    mutationFn: createProposal,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["getAllQueys"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isSendingProposal, sendProposalFn };
};

export default useCreateProposal;
