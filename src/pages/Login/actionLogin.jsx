// import { getDepartamento, login } from "@api/login.api.js";
import Cookies from "js-cookie";

export async function actionLogin({ request }) {
  const infoForm = await request.formData();
  const datosForm = Object.fromEntries(infoForm);

  console.log(datosForm);

  Cookies.set("JWT", "TOKEN:29873491282");

  location.reload();
  return null;
}
