import AddSongInput from '../AddSongInput';
import QuoteDisplay from '../QuoteDisplay';
import SongList from '../SongList';
import SquatInput from '../SquatInput';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>
				{' '}
				<span>SSSG</span> (Super Squat Song Generator)
			</h1>
			<div className='left-side'>
				<SquatInput />
				<QuoteDisplay />
			</div>
			<div className='right-side'>
				<SongList />
			</div>
			<div className='footer-form'>
				<AddSongInput />
			</div>
		</div>
	);
}

export default App;
