import React, { useState, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // Start the timer
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
  };

  // Pause the timer
  const pauseTimer = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
  };

  // Reset the timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div>
      <h3>Timer: {time} seconds</h3>
      <button onClick={startTimer} disabled={isRunning}>Start</button>
      <button onClick={pauseTimer}>{isRunning ? 'Pause' : 'Resume'}</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default Timer;
