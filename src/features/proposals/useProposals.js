import { useQuery } from "@tanstack/react-query";
import { getAllProposals } from "../../services/proposalService";

export const useProposals = () => {
  const { data, isPending } = useQuery({
    queryKey: ["getAllProposals"],
    queryFn: getAllProposals,
    retry: false,
  });

  const { proposals } = data || [];

  return { proposals, isPending };
};
