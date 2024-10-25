import React, { useState, useEffect, useRef } from 'react';
import Timer from './cmp/timer';

function App() {
  const [typedWord, setTypedWord] = useState('');
  const hiddenWord = 'nika nikadze'; 
  const [isHiddenWordMatched, setIsHiddenWordMatched] = useState(false);
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleKeyPress = (event) => {
      setTypedWord((prev) => prev + event.key);

      if ((typedWord + event.key).includes(hiddenWord)) {
        setIsHiddenWordMatched(true);
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress); 
    };
  }, [typedWord, hiddenWord]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseCoordinates({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <h1>Type the hidden word</h1>
      {isHiddenWordMatched ? (
        <h2>you found hidden word "{hiddenWord}" yay!</h2>
      ) : (
        <h2>cmon bro dont give up just type...</h2>
      )}

      <h3>Typed so far: {typedWord}</h3>

      <Timer />

      <div style={{ marginTop: '20px' }}>
        <h4>Mouse Coordinates:</h4>
        <p>X: {mouseCoordinates.x}, Y: {mouseCoordinates.y}</p>
      </div>
    </div>
  );
}

export default App;
