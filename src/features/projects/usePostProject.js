import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProject } from "../../services/projectsService";
import toast from "react-hot-toast";

const usePostProject = () => {
  const queryClient = useQueryClient();
  const { isPending: isCreatingProjrct, mutate: createProjectFn } = useMutation({
    mutationFn: createProject,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      queryClient.invalidateQueries({ queryKey: ["getAllQueys"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isCreatingProjrct, createProjectFn };
};

export default usePostProject;
