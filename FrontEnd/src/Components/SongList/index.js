import "./SongList.css";

//takes in data object
function SongList({ data }) {
  return (
    <div className="song-list">
      <h3>{data.songData.title}</h3>
      <h4>{data.songData.artist}</h4>
      {/* <p>Link:<a href="{data.link}">{data.link}</a></p> */}

      {/* <iframe width="420" height="345" src={data.link}>
</iframe> */}

      <p>Suggested by: {data.songData.suggestedBy}</p>
    </div>
  );
}

export default SongList;
