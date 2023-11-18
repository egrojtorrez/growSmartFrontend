import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

export const LoginProtected = ({ children, redirectTo = "/login" }) => {
  const jwt = Cookies.get("JWT");
  if (!jwt) {
    return <Navigate to={redirectTo} />;
  }
  return children;
};

LoginProtected.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};
