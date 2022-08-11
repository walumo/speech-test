import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
        <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button 
                onTouchStart={SpeechRecognition.startListening}
                onTouchEnd={SpeechRecognition.stopListening}
                onMouseDown={SpeechRecognition.startListening} 
                onMouseUp={SpeechRecognition.stopListening}>Speak
            </button>
      
      <button onClick={resetTranscript} on>Reset</button>
      <p className='purple'>{transcript}</p>
    </div>
  );
};
export default Dictaphone;