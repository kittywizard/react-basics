import React, {useEffect, useRef, useState} from "react"
import useTimer from "./useTimer";

function App() {

  const startingTime = 10;
  const [handleChange, startTimer, inputRef, textarea, wordCount, countdown, startGame] = useTimer(startingTime)


  const styles = {
    backgroundColor: startTimer ? "#cccccc" : "#00b800"
}

  return (
    <div className="container">
        <h1>Speed Typing Game</h1>
        <p className="paragraph">How fast can you type?</p>
        <textarea 
            onChange={handleChange}
            name="textarea"
            value={textarea}
            disabled={!startTimer}
            ref={inputRef}
        />

        <h4>Time Remaining: {countdown}</h4>
        <button
          style={styles} 
          onClick={startGame}
          disabled={startTimer}

        >
          Start Game
        </button>
        <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
