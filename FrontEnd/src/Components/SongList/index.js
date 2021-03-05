import './SongList.css';

//example data!!!
const initialData = [
	{
		title    : 'bob',
		artist   : 'bob',
		duration : 'bob',
		link     : 'bob',
		yourName : 'bob',
	},
];

//takes in data object
function SongList() {
	return (
		<ul className='song-list'>
			{initialData.map((item) => (
				<li className='song-list-item'>
					<span className='title-artist'>
						{item.title} - {item.artist}
					</span>
					<span className='duration'>{item.duration}</span>
					<span className='link'>{item.link}</span>
					<span className='recommended-by'>Recommended by:{item.yourName}</span>
				</li>
			))}
		</ul>
	);
}

export default SongList;
