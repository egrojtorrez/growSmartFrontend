import Timeago from "@components/Timeago";
import { Avatar, Stack } from "rsuite";

export default function Comentarios({
  avatar,
  id,
  nombre_usuario,
  departamento_usuario,
  fecha_creado,
  comentario,
}) {
  return (
    <Stack.Item style={{ width: "100%", display: "flex", marginBottom: 5 }}>
      <Avatar
        circle
        src={avatar ? avatar : "/user.svg"}
        style={{ marginRight: 5, minWidth: 40 }}
      />
      <div
        style={{
          background: "#9494e71c",
          borderRadius: 6,
          width: "100%",
          padding: 5,
        }}
      >
        <span style={{ fontSize: "1em", fontWeight: "bold" }}>
          {nombre_usuario} | {departamento_usuario}
        </span>
        <p>{comentario}</p>
        <Timeago date={fecha_creado} />
      </div>
    </Stack.Item>
  );
}
