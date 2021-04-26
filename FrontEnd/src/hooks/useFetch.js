import { useEffect, useState } from "react";

function useFetch(songLengthState) {
  const [dataState, setDataState] = useState(1);
  const [quoteDataState, setQuoteDataState] = useState({});

  const BACKEND_URL = "http://localhost:5000/songs";
  const BACKEND_URL_Quotes = "http://localhost:5000/quotes";

  let songLengthStateNew = songLengthState / 30;

  if (songLengthStateNew <= 1) {
    songLengthStateNew = 1;
    console.log(`scl if under 1 ${songLengthStateNew}`);
  } else {
    songLengthStateNew = Math.floor(songLengthStateNew);
    console.log(`scl after math floor ${songLengthStateNew}`);
  }

  const PATH = songLengthStateNew;

  async function fetchData() {
    let result = await fetch(`${BACKEND_URL}/${PATH}`);
    let data = await result.json();
    setDataState(data);

    let QuoteResult = await fetch(`${BACKEND_URL_Quotes}/${PATH}`);
    let QuoteData = await QuoteResult.json();
    setQuoteDataState(QuoteData);
  }

  useEffect(() => {
    fetchData();
  }, [songLengthState]);

  let DATA = { songData: dataState, quoteData: quoteDataState };
  console.log(DATA);
  return DATA;
}

export default useFetch;
