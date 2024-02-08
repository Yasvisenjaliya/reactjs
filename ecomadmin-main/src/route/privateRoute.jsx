import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn, isLoading, isInitialState, isError } = useAuth(true);
  const path = useLocation();
  if (!isLoggedIn) {
    return <Navigate to={`/login?redirectTo=${path.pathname}`} replace />;
  }

  if (isInitialState) {
    return <p>Loading Application....</p>;
  }
  if (isLoading) {
    return <p>Checking authorization....</p>;
  }
  if (isError) {
    return <Navigate to={`/login?redirectTo=${path.pathname}`} replace />;
  }
  // if (!isActive) {
  //   return <p>Profile is not active...</p>;
  // }
  // if (showProfileComplete) {
  //   return (
  //     <Navigate
  //       to={`/dashboard/${routePath.completeProfile}?redirectTo=${path.pathname}&mode=completeProfile`}
  //       replace
  //     />
  //   );
  // }
  return children;
};

export default PrivateRoute;
