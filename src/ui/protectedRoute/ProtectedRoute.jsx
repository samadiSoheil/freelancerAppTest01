import { useEffect } from "react";
import { useAuthorize } from "../../features/auth/useAuthorize";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useTheme } from "../../context/ThemeProvider";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAuthorise, isVerirified, isPending } = useAuthorize();

  //* this is for closing fixed menu
  const { pathname } = useLocation();
  const { setISopenSidebar } = useTheme();
  const isChangePage = pathname.split("/").at(-1);
  useEffect(() => {
    setISopenSidebar(false);
  }, [isChangePage]);
  //* this is for closing fixed menu

  const navigateUser = useNavigate();
  useEffect(() => {
    if (!isPending && !isAuthenticated) navigateUser("/auth");
    if (!isPending && !isVerirified) {
      toast.error("اکانت شما هنوز تایید نشده است.");
      navigateUser("/auth");
    }
    if (!isPending && !isAuthorise) navigateUser("/not-access");
  }, [isAuthenticated, isAuthorise, isPending]);

  if (isAuthenticated && isAuthorise) return <>{children}</>;
};

export default ProtectedRoute;
