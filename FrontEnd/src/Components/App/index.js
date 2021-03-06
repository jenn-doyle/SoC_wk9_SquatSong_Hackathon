import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import AddSongInput from '../AddSongInput';
import QuoteDisplay from '../QuoteDisplay';
import SongList from '../SongList';
import SquatInput from '../SquatInput';
import './App.css';

function App() {
	const [ dataState, setDataState ] = useState(0);
	// fetch songs here using our custom hook - useFetch

	const appData = useFetch(dataState);

	return (
		<div className='App'>
			<header>
				<img
					id='man'
					src='https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bodyweight-squat.gif?resize=480:*'
					alt='man squatting'
				/>
				<h1>
					<span id='title-span'>SSSG</span>
					Super Squat Song Generator
				</h1>
				<img
					id='woman'
					src='https://thumbs.gfycat.com/BlueWetHarvestmouse-small.gif'
					alt='woman squatting'
				/>
			</header>

			<SquatInput onClick={setDataState} />
			<QuoteDisplay data={appData.quoteData} />
			<SongList className='list-com' data={appData.songData} />

			<footer>
					<img
					id='soc'
					src='https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png'
					alt='soc logo'
				/>
				<AddSongInput className='add-song-com' />
				<img
					id='soc'
					src='https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png'
					alt='soc logo'
				/>
			</footer>
		</div>
	);
}

export default App;
