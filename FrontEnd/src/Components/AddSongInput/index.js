import { useState } from "react";
import "./AddSongInput.css";
import usePost from "../../hooks/usePost";

const initialData = {
  Title: "bob",
  Artist: "bob",
  SongLengthCode: "bob",
  link: "bob",
  SuggestedBy: "bob",
};

function AddSongInput() {
  const [data, setData] = useState(initialData);

  function UpdateData(event) {
    const key = event.target.placeholder;
    const newValue = event.target.value;

    setData({ ...data, [key]: newValue });
  }

  // post songs from here using usePost custom hooks.
  usePost(data);

  return (
    <form className="add-song-form" action="submit">
      <input type="text" placeholder="Title" onChange={(e) => UpdateData(e)} />
      <input type="text" placeholder="Artist" onChange={(e) => UpdateData(e)} />
      <label>in seconds:</label>
      <input
        type="text"
        placeholder="SongLengthCode"
        onChange={(e) => UpdateData(e)}
      />
      <input type="text" placeholder="Link" onChange={(e) => UpdateData(e)} />
      <input
        type="text"
        placeholder="SuggestedBy"
        onChange={(e) => UpdateData(e)}
      />

      <button
        onClick={(event) => {
          event.preventDefault();
          console.log(data);
          // console.alert("thanks for your submission");
        }}
      >
        Add Song
      </button>
    </form>
  );
}

export default AddSongInput;
