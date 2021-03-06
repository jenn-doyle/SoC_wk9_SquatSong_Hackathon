import { useState } from "react";
import "./AddSongInput.css";
import usePost from "../../hooks/usePost";

const initialData = {
  Title: "bob",
  Artist: "bob",
  SongLengthCode: "bob",
  Link: "bob",
  SuggestedBy: "bob",
};

function AddSongInput() {
  const [data, setData] = useState(initialData);
  const [postData, setPostData] = useState(initialData);

  function UpdateData(event) {
    const key = event.target.id;
    const newValue = event.target.value;
    setData({ ...data, [key]: newValue });
  }


  // post songs from here using usePost custom hooks.
  usePost(postData);


// let selectStyle = {
//   height: '26px',};

  return (
    <form id="form" className="add-song-form" action="submit">
      <input type="text" placeholder="Title" id="Title" onChange={(e) => UpdateData(e)} />
      <input type="text" placeholder="Artist" id="Artist" onChange={(e) => UpdateData(e)} />
      <input type="text" placeholder="Link" id="Link" onChange={(e) => UpdateData(e)} />
      <input type="text" placeholder="Your Name" id="SuggestedBy" onChange={(e) => UpdateData(e)}/>

      {/* <label>in seconds:</label> */}
      <select
        form="form"
        
        type="text"
        id="SongLengthCode"
        onChange={(e) => UpdateData(e)}
        required >
           <option value="0">How Long is The Song?</option>
            <option value="1">0-60 seconds</option>
            <option value="2">61-90 seconds</option>
            <option value="3">91-120 seconds</option>
            <option value="4">121-150 seconds</option>
            <option value="5">151-180 seconds</option>
            <option value="6">181-210 seconds</option>
            <option value="7">211-240 seconds</option>
            <option value="8">241-280 seconds</option>
        </select>
        
      <button
        onClick={(event) => {
          event.preventDefault();
          console.log(data);
          setPostData(data);
          document.querySelector(".add-song-form").reset();

          // console.alert("thanks for your submission");
        }}
      >
        Add Song
      </button>

    </form>
  );
}

export default AddSongInput;