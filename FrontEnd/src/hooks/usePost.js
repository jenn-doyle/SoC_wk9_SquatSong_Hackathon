import { useEffect } from "react";

function usePost(newSong) {
  function makePost() {
    // our form returns object
    // give object to post to add to db
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSong),
    };
    fetch("https://localhost:5001/songs", requestOptions);
  }

  useEffect(() => {
    makePost(newSong);
  }, [newSong]);
}

export default usePost;

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
