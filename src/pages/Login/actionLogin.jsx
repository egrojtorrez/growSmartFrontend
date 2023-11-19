// import { getDepartamento, login } from "@api/login.api.js";
import Cookies from "js-cookie";

export async function actionLogin({ request }) {
  const infoForm = await request.formData();
  const datosForm = Object.fromEntries(infoForm);

  Cookies.set("JWT", "TOKEN:29873491282");
  Cookies.set("user", JSON.stringify({ user: datosForm.identifier }));

  location.reload();
  return null;
}
