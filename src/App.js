import './App.css';
import SpeechInput from './components/SpeechInput';
import LogCoords from './components/LogCoords'

function App() {

  return (
    <div className="App">
      <p>Speech recognition v.0.0.1</p>
      <SpeechInput />
      <LogCoords />
    </div>
  );
}

export default App;
