import { useState } from "react";
import "./AddSongInput.css";

const initialData = {
  Title: "bob",
  Artist: "bob",
  Duration: "bob",
  link: "bob",
  yourName: "bob",
};

function AddSongInput() {
  const [data, setData] = useState(initialData);

  function UpdateData(event) {
    const key = event.target.placeholder;
    const newValue = event.target.value;

    setData({ ...data, [key]: newValue });
  }

  // post songs from here using usePost custom hooks.

  return (
    <form className="add-song-form" action="submit">
      <input type="text" placeholder="Title" onChange={(e) => UpdateData(e)} />
      <input type="text" placeholder="Artist" onChange={(e) => UpdateData(e)} />
      <input
        type="text"
        placeholder="Duration"
        onChange={(e) => UpdateData(e)}
      />
      <input type="text" placeholder="Link" onChange={(e) => UpdateData(e)} />
      <input
        type="text"
        placeholder="your name"
        onChange={(e) => UpdateData(e)}
      />

      <button
        onClick={(event) => {
          event.preventDefault();
          console.log(data);
        }}
      >
        Add Song
      </button>
    </form>
  );
}

export default AddSongInput;
