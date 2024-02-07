import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const { isLoggedIn, isLoading, redirectToUrl } = useAuth(true);
  //   const location = useLocation();
  console.log(redirectToUrl, "redirectUrl123");

  if (isLoggedIn) {
    return <Navigate to={redirectToUrl} />;
  }

  //   if (isInitialState) {
  //     return <p>Loading Application....</p>;
  //   }
  if (isLoading) {
    return <p>Checking authorization....</p>;
  }
  return children;
};

export default PublicRoute;
