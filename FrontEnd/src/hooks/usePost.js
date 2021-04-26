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
    fetch("https://supersquatsongapp.herokuapp.com/songs", requestOptions);
  }

  useEffect(() => {
    makePost(newSong);
  }, [newSong]);
}

export default usePost;
