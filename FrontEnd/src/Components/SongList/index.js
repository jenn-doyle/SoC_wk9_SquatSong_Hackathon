import './SongList.css';


//takes in data object
function SongList({data}) {
	return (
		<div className='song-list'>
			<h3>{data.title}</h3>
			<h4>{data.artist}</h4>
			<p>Link:<a href="{data.link}">{data.link}</a></p>
			<p>Suggested by: {data.suggestedBy}</p>
		</div>
	);
}

export default SongList;
