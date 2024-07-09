import { useLocation } from "react-router-dom";
import { useUser } from "./useUser";

export const useAuthorize = () => {
  const { data, isPending } = useUser();
  const { pathname } = useLocation();

  const userRole = data?.user.role.toLowerCase();
  const pathRole = pathname.split("/").at(1).toLowerCase();

  let isAuthenticated = false;
  if (data?.user) isAuthenticated = true;

  let isAuthorise = false;
  if (userRole === pathRole) isAuthorise = true;

  let isVerirified = false;
  if (data?.user && +data?.user.status === 2) isVerirified = true;

  return { isAuthenticated, isAuthorise, isPending, isVerirified };
};
