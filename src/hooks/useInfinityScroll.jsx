import { useLazyQuery, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";

export const useInfinityScroll = ({
  QUERY,
  variables,
  updateQuery,
  key,
  fetchPolicy = "cache-first",
}) => {
  const [start, setStart] = useState(0);
  const [finishing, setFinishing] = useState(false);
  const { loading, error, data, refetch, fetchMore } = useQuery(QUERY, {
    variables: variables,
    fetchPolicy: fetchPolicy,
  });

  const actualizarData = () => {
    fetchMore({
      variables: { ...variables, start: start },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult[key].data.length) {
          setFinishing(true);
          return prev;
        }
        if (fetchMoreResult[key].data.length < 10) {
          setFinishing(true);
        }
        return updateQuery(prev, fetchMoreResult);
      },
    });
  };

  useEffect(() => {
    try {
      if (data[key]?.data.length < 10) {
        setFinishing(true);
      }
      setStart(data[key]?.data.length);
    } catch (error) {}
  }, [data]);

    return { data, finishing,setFinishing, actualizarData, loading, error, refetch, start, setStart };
  
};
