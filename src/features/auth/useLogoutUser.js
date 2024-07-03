import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

function useLogoutUser() {
  const navigateUser = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logoutFun, isPending: isLogouting } = useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      queryClient.removeQueries();
      navigateUser("/auth", { replace: true });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  return { isLogouting, logoutFun };
}

export default useLogoutUser;
