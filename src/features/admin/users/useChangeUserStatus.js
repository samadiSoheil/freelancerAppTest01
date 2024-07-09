import { useMutation, useQueryClient } from "@tanstack/react-query";
import { verifyUser } from "../../../services/authService";
import toast from "react-hot-toast";

export const useChangeUserStatus = () => {
  const queryClient = useQueryClient();
  const { mutate: changeUserStatusFu, isPending: isChangeUserStatus } = useMutation({
    mutationFn: verifyUser,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries({
        queryKey: ["getAllUsers"],
      });
    },
    onError: (erroe) => {
      toast.error(erroe?.response?.data?.message);
    },
  });

  return { changeUserStatusFu, isChangeUserStatus };
};
