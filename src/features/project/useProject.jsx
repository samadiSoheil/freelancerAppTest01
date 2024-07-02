import { useQuery } from "@tanstack/react-query";
import { getProject } from "../../services/projectsService";
import { useParams } from "react-router-dom";

const useProject = () => {
  const projectId = useParams();

  const { data, isPending } = useQuery({
    queryKey: ["project", projectId.id],
    queryFn: () => getProject(projectId.id),
    retry: false,
  });

  const { project } = data || [];

  return { project, isPending };
};

export default useProject;
