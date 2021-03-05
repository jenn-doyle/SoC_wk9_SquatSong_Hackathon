import AddSongInput from '../AddSongInput';
import QuoteDisplay from '../QuoteDisplay';
import SongList from '../SongList';
import SquatInput from '../SquatInput';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>
				<span>SSSG</span> (Super-Squat Song Generator)
			</h1>
			<SquatInput className='squat-input-com' />
			<QuoteDisplay className='quote-display-com'/>

			<SongList className='list-com' />

			<AddSongInput className='add-song-com'/>
		</div>
	);
}

export default App;
