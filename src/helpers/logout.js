import Cookies from "js-cookie";

export const logout = () => {
  Cookies.remove("JWT")
  Cookies.remove("user")
  location.reload();
}