import Cookies from "js-cookie";

const user = JSON.parse(Cookies.get("user") ?? "{}");

export default user;

