import { GET_RECURSOS } from "@api/recursos.graphql";
import { GET_MY_RECURSOS } from "@api/recursos.graphql";
import { adapterRecursos, getType } from "@helpers/adapters";
import { initalRecursoVariables } from "@helpers/queryVariables";
import { updateCacheQueryRecursos } from "@helpers/updateCache";
import { useEffect, useMemo, useState } from "react";
import { useInfinityScroll } from "./useInfinityScroll";
import { getMetadataFirebase } from "@helpers/firebase";

export const useRecursos = ({ canal }) => {
  const { data, loading, error, finishing, actualizarData } = useInfinityScroll(
    {
      QUERY: GET_RECURSOS,
      variables: { ...initalRecursoVariables, canal },
      updateQuery: updateCacheQueryRecursos,
      key: "recursos",
      fetchPolicy: "cache-and-network",
    }
  );
  const dataAdapt = useMemo(() => {
    if (!data) return [];
    return adapterRecursos(data);
  }, [data]);
  const [dataAdaptTypes, setDataAdaptTypes] = useState([]);

  useEffect(() => {
    if (!data) return;
    (async () => {
      const newData = await Promise.all(
        dataAdapt.map(async (recurso) => {
          const { contentType } = await getMetadataFirebase(recurso.url);
          return {
            ...recurso,
            type: getType(contentType),
          };
        })
      );
      setDataAdaptTypes(newData);
    })();
  }, [data]);

  return { loading, data: dataAdaptTypes, error, finishing, actualizarData };
};

export const useMisRecursos = () => {
  const { data, loading, error, finishing, actualizarData, refetch } =
    useInfinityScroll({
      QUERY: GET_MY_RECURSOS,
      variables: initalRecursoVariables,
      updateQuery: updateCacheQueryRecursos,
      key: "recursos",
      fetchPolicy: "cache-and-network",
    });

  const dataAdapt = useMemo(() => {
    if (!data) return [];
    return adapterRecursos(data);
  }, [data]);

  const [dataAdaptTypes, setDataAdaptTypes] = useState([]);

  useEffect(() => {
    if (!data) return;
    (async () => {
      const newData = await Promise.all(
        dataAdapt.map(async (recurso) => {
          const { contentType } = await getMetadataFirebase(recurso.url);
          return {
            ...recurso,
            type: getType(contentType),
          };
        })
      );
      setDataAdaptTypes(newData);
    })();
  }, [data]);

  return {
    loading,
    data: dataAdaptTypes,
    error,
    finishing,
    actualizarData,
    refetch,
  };
};
