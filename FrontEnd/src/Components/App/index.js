import { useState } from "react";
import AddSongInput from "../AddSongInput";
import QuoteDisplay from "../QuoteDisplay";
import SongList from "../SongList";
import SquatInput from "../SquatInput";
import "./App.css";
import useFetch from "../../hooks/useFetch";

function App() {
  const [dataState, setDataState] = useState(0);
  // fetch songs here using our custom hook - useFetch

  const appData = useFetch(dataState);
  console.log(appData);

  return (
    <div className="App">
      <h1>
        <span>SSSG</span> (Super-Squat Song Generator)
      </h1>
      <SquatInput className="squat-input-com" onClick={setDataState} />
      <QuoteDisplay className="quote-display-com" />

      <SongList className="list-com" data ={appData} />

      <AddSongInput className="add-song-com" />
    </div>
  );
}

export default App;
