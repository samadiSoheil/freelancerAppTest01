import { useQuery } from "@tanstack/react-query";
import { getAllOwnerProjects } from "../../services/projectsService";

export const useOwnerProject = () => {
  const { data, isPending } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllOwnerProjects,
    retry: false,
  });

  const { projects } = data || {};
  return { isPending, projects };
};
