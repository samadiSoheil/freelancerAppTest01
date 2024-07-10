import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProject } from "../../services/projectsService";
import toast from "react-hot-toast";

const useEditProject = () => {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editeProjectFun } = useMutation({
    mutationFn: editProject,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
      queryClient.invalidateQueries({
        queryKey: ["getAllQueys"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isEditing, editeProjectFun };
};

export default useEditProject;
