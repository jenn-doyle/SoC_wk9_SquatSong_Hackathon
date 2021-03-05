import "./AddSongInput.css";
import { useEffect, useState } from "react";

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

  return (
    <form action="submit">
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

// async function sendSuggestion(path, method, body = ""){
//   const res = await fetch(`${BACKEND_URL}${path}`, {
//     method,
//     headers: {
//       "content-type": "application/json",
//     },
//     body: JSON.stringify(body),
//   });
//   const data = await res.json();
//   return data;
// }
// async function handleAddSong(event) {
//   event.preventDefault();
//   const partialSongSuggestion = {
//     title: event.target[0].value,
//     artist: event.target[1].value,
//     duration: event.target[2].value,
//     link: event.target[3].value,
//     name: event.target[4].value,

//   };
//   const completeSongSuggestion = await sendSuggestion(
//     "/songs", // come back to this
//     "POST",
//     partialSongSuggestion
//   );
// }

export default AddSongInput;
