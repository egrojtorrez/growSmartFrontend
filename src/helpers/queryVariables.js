import user from "./user";

export const initalPostVariables = {
    start: 0,
    limit: 10,
    departament: user.departamento,
    // canal: null
};

export const initalMyPostVariables = {
    start: 0,
    limit: 10,
    id: user.usuario,
};

export const initalRecursoVariables = {
    start: 0,
    limit: 10,
    departamento: user.departamento,
    canal: null
};

export const initalMyRecursoVariables = {
    start: 0,
    limit: 10,
    id: user.usuario,
};


export const initialComentariosVariables = {
    start: 0,
    limit: 10,
    id: null,
};