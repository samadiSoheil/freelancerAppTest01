import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../services/projectsService";

export const useAllProjects = () => {
  const { data, isPending } = useQuery({
    queryKey: ["getAllQueys"],
    queryFn: getAllProjects,
  });

  const { projects } = data || [];
  return { projects, isPending };
};
