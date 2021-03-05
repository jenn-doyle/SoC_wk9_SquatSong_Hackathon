import { useEffect, useState } from "react";

function useFetch(songLengthState) {
  const [dataState, setDataState] = useState({});

  const BACKEND_URL = "https:localhost:5001/songs";
  const PATH = songLengthState;

  async function fetchData() {
    let result = await fetch(`${BACKEND_URL}/${PATH}`);
    let data = await result.json();
    setDataState(data);
  }
  useEffect(() => {
    fetchData();
  }, [songLengthState]);

  return dataState;
}

export default useFetch;
