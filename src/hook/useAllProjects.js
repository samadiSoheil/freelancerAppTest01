import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "../services/projectsService";
import { useLocation } from "react-router-dom";

export const useAllProjects = () => {
  const { search } = useLocation();
  const searchObj = Object.fromEntries(new URLSearchParams(search));
  const { data, isPending } = useQuery({
    queryKey: ["getAllQueys", searchObj],
    queryFn: () => getAllProjects(search),
  });

  const { projects } = data || [];
  return { projects, isPending };
};
