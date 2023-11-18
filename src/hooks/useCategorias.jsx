import { GET_DEPARTAMENTOS } from "@api/tickets.graphql";
import { useQuery } from "@apollo/client";
import user from "@helpers/user";
import { useEffect, useState } from "react";

export const useCategorias = () => {
  const { loading: loadDepto, data: dataDepto } = useQuery(GET_DEPARTAMENTOS, {
    variables: { user: user.usuario },
  });
  const [departamentos, setDeptos] = useState([]);
  const [selectedDept, setSelectedDept] = useState([]);

  useEffect(() => {
    const depto = dataDepto?.departamentos?.data;
    if (depto) {
      const data = depto.map((depto) => {
        return {
          value: depto.id,
          label: depto.attributes.nombre,
        };
      });
      setDeptos(data);
    }
  }, [dataDepto]);

  const treeData = (data) => {
    if (!data) return [];
    const sucursales = data.filter((depto) =>
      depto.label.startsWith("Sucursal")
    );
    const rest = data.filter((depto) => !depto.label.startsWith("Sucursal"));
    const tree = [
      ...rest,
      { label: "Sucursales", value: "sucursales", children: sucursales },
    ];

    return tree;
  };

  const getIdsSucursales = (data) => {
    if (!data) return [];
    const sucursales = data
      .filter((depto) => depto.label.startsWith("Sucursal"))
      .map((depto) => depto.value);
    return sucursales;
  };

  return {
    departamentos,
    loadDepto,
    selectedDept,
    setSelectedDept,
    treeData,
    getIdsSucursales,
  };
};
