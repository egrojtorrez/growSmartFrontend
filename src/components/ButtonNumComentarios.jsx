export default function ButtonNumComentarios({ comentarios, onClick }) {
  return (
    <span className="btnComentarios" onClick={onClick}>
      {comentarios.length == 10 ? "10+" : comentarios.length} comentarios
    </span>
  );
}
