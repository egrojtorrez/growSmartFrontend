export const adapterPost = (data) => {
  if (!data?.posts?.data) return data;
  const posts = data?.posts?.data.map((post) => {
    return {
      id: post.id,
      titulo: post.attributes.titulo,
      contenido: post.attributes.contenido,
      pdfurl: post.attributes.pdfurl,
      imagenurl: post.attributes.imagenurl,
      idusuario: post.attributes.idusuario.data.attributes.username,
      iddepto: post.attributes?.idusuario?.data?.attributes.departamento.data.id,
      departamentos: adapterDepartamentos(post.attributes.departamentos.data),
      canal: post.attributes.idusuario.data.attributes.departamento.data.id,
      comentarios: post.attributes.comentarios_posts.data
    };
  });

  return posts;
};

export const adapterDepartamentos = (data) => {
  const departamentos = data.map((departamento) => departamento.id);
  return departamentos;
};

export const adapterUserDepartamento = (data) => {
  const departamento =
    data?.data?.attributes?.idusuario?.data?.attributes?.departamento?.data?.id;
  return departamento;
};

export const adapterDepartamentosSinSucursales = (data) => {
  return data?.filter(
    (departamento) => !departamento.label.startsWith("Sucursal")
  );
};

export const adapterNotificacionesTicket = (data) => {
  return data?.map((notificacion) => {
    return {
      id: notificacion.id,
      timeago: notificacion.attributes.createdAt,
      texto: notificacion.attributes.texto,
      visto: notificacion.attributes.visto,
      tipo: notificacion.attributes.tipo,
      url_mensaje: notificacion.attributes.url_mensaje,
    };
  });
};

export const adapterUsuarios = (data) => {
  return data?.usersPermissionsUsers.data.map(({ attributes, id }) => {
    return {
      id,
      nombre: attributes.nombre,
      apellido: attributes.apellido,
      correo: attributes.email,
      telefono: attributes.telefono,
      puesto: attributes.puesto,
      avatar: attributes.avatar,
    };
  });
};

export const adapterComentarios = (data) => {
  if (data?.comentariosPosts?.data?.length === 0) return [];
  return data?.comentariosPosts?.data?.map(({ attributes, id }) => {
    return {
      id,
      avatar: attributes.idusuario.data.attributes.avatar,
      comentario: attributes.comentario,
      fecha_creado: attributes.createdAt,
      nombre_usuario: attributes.idusuario.data.attributes.nombre,
      departamento_usuario:
        attributes.idusuario.data.attributes.departamento.data.attributes
          .nombre,
    };
  });
};

export const adapterRecursos = (data) => {
  return data?.recursos?.data?.map((recurso) => {
    return {
      id: recurso.id,
      titulo: recurso.attributes.titulo,
      url: recurso.attributes.url,
      departamentos: adapterDepartamentos(
        recurso.attributes.departamentos.data
      ),
      canal: recurso.attributes.usuario.data.attributes.departamento.data.id,
    };
  });
};

export const getType = (contentType) => {
  if (!contentType) return;
  if (contentType.includes("spreadsheet")) return "excel";
  if (contentType.includes("pdf")) return "pdf";
  if (contentType.includes("image")) return "image";
  return "doc";
};

export const adapterTickets = (data) => {
  if (data?.tickets?.data?.length === 0) return [];
  return data?.tickets?.data?.map((ticket) => {
    const fecha = new Date(ticket.attributes.createdAt)
      .toISOString()
      .slice(0, 10);
    return {
      id: ticket.id,
      departamento: ticket.attributes.depto_origen.data.attributes.nombre,
      id_depto_origen: ticket.attributes.depto_origen.data.id,
      nombre_creador: ticket.attributes.nombre_creador,
      asunto: ticket.attributes.asunto,
      prioridad: ticket.attributes.prioridad,
      estatus: ticket.attributes.estatus,
      createdAt: fecha,
      creado: ticket.attributes.createdAt,
      descripcion: ticket.attributes.descripcion,
      listo_para_fecha: ticket.attributes.listo_para_fecha,
    };
  });
};
