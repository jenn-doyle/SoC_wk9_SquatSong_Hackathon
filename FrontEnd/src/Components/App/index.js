import { useState } from "react";
import AddSongInput from "../AddSongInput";
import QuoteDisplay from "../QuoteDisplay";
import SongList from "../SongList";
import SquatInput from "../SquatInput";
import "./App.css";
import useFetch from "../../hooks/useFetch";
import ReactPlayer from "react-player";

function App() {
  const [dataState, setDataState] = useState(0);
  // fetch songs here using our custom hook - useFetch

  const appData = useFetch(dataState);
  console.log(`This is what you want ${appData}`);
  // if (appData === null){ 
  //   return <p>Loading...</p>
  return (
    <div className="App">
      <h1>
        <span id="title">** S-S-S-G **</span> 
        <br/>
        Super Squat Song Generator
      </h1>
      <img id="man" src ="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bodyweight-squat.gif?resize=480:*" alt = "man sqautting"/>
      <img id="woman" src ="https://thumbs.gfycat.com/BlueWetHarvestmouse-small.gif" alt = "woman sqautting"/>
      <h2 className="squat-text">Enter How Many Squats You Gotta Do... </h2>
    
      <SquatInput className="squat-input-com" onClick={setDataState} />
      <QuoteDisplay className="quote-display-com" data = {appData}/>
      <SongList className="list-com" data ={appData} />
      <AddSongInput className="add-song-com" />

      <ReactPlayer className="song-video" url={appData.link}/>

      <img id="world" src ="https://d33wubrfki0l68.cloudfront.net/d6e8999f4d43f37bbc7b46cbccd9bffdc9ffdf26/62323/static/planet_soc-936d90fa66f241adff76225618c37d0f.png" alt = "soc world"/>
      <img id="soc" src ="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" alt = "soc logo"/>
      
    </div>
    
  );
}

export default App;
