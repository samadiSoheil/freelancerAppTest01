import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOwnerProject } from "../../services/projectsService";
import toast from "react-hot-toast";

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutate: deleteProject } = useMutation({
    mutationFn: deleteOwnerProject,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isDeleting, deleteProject };
};
