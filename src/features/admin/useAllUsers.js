import { useQuery } from "@tanstack/react-query";
import { getAllUsersApi } from "../../services/authService";

export const useAllUsers = () => {
  const { data, isPending } = useQuery({
    queryKey: ["getAllUsers"],
    queryFn: getAllUsersApi,
  });
  const { users } = data || [];
  return { users, isPending };
};
