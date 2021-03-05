import { useEffect, useState } from "react";

function useFetch(state) {
  const [dataState, setDataState] = useState([]);

  async function fetchData() {
    let result = await fetch("url");
    let data = await result.json();
    setDataState(data);
  }
  useEffect(() => {
    fetchData();
  }, [state]);

  return dataState;
}

export default useFetch;
