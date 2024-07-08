import { useEffect } from "react";
import { useAuthorize } from "../../features/auth/useAuthorize";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAuthorise, isPending } = useAuthorize();
  const navigateUser = useNavigate();
  useEffect(() => {
    if (!isPending && !isAuthenticated) navigateUser("/auth");
    if (!isPending && !isAuthorise) navigateUser("/not-access");
  }, [isAuthenticated, isAuthorise, isPending]);

  if (isAuthenticated && isAuthorise) return <>{children}</>;
};

export default ProtectedRoute;
