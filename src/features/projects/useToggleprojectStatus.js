import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleProjectStatus } from "../../services/projectsService";
import toast from "react-hot-toast";

const useToggleprojectStatus = () => {
  const queryClient = useQueryClient();

  const { mutate: toggleProgectStatusFun, isPending: isToggleStatus } = useMutation({
    mutationFn: toggleProjectStatus,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { toggleProgectStatusFun, isToggleStatus };
};

export default useToggleprojectStatus;
