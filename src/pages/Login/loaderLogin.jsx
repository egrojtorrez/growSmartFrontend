import { redirect } from "react-router-dom";
import Cookies from "js-cookie";

export async function loaderLogin() {
  const jwt = Cookies.get("JWT");
  if (jwt) return redirect("/app");
  return null;
}
