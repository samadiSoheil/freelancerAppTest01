import { useEffect } from "react";
import { useAuthorize } from "../../features/auth/useAuthorize";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAuthorise, isVerirified, isPending } = useAuthorize();
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
