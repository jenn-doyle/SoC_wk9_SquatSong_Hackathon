import './SongList.css';

function SongList({ data }) {
	return (
		<div className='song-list'>
			<h3>{data.title}</h3>
			<h4>
				<span>by </span>
				{data.artist}
			</h4>
			{/* <p className="link-p">
				Link: <a href='{data.link}'>{data.link}</a>
			</p> */}

			<p className='suggested-by'>
				Suggested by <span>{data.suggestedBy}</span>
			</p>
		</div>
	);
}

export default SongList;
