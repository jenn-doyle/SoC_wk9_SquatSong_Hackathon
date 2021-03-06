import { useEffect, useState } from "react";

function useFetch(songLengthState) {
  const [dataState, setDataState] = useState(1);

  const BACKEND_URL = "https:localhost:5001/songs";
  
  console.log(`scl recieved in fetch ${songLengthState}`);
  
  let songLengthStateNew = songLengthState/30;
  
  if (songLengthStateNew<=1){songLengthStateNew = 1;
    console.log(`scl if under 1 ${songLengthStateNew}`)}
    
    else{songLengthStateNew = Math.floor(songLengthStateNew); 
      console.log(`scl after math floor ${songLengthStateNew}`)}
      
  const PATH = songLengthStateNew;
  
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