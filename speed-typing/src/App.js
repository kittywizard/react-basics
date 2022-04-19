import React, {useEffect, useState} from "react"

function App() {

  const startingTime = 10;


  //create state
  const [textarea, setTextarea] = useState("");
  const [countdown, setCountdown] = useState(startingTime);
  const [startTimer, setStartTimer] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if(startTimer){
      setTimeout(() => countdown > 0 && setCountdown(prevState => (prevState - 1)), 1000);
    }

    if(startTimer && countdown === 0) {
      setStartTimer(prevState => (!prevState));
      setWordCount(calculateWordCount(textarea));
    }
  },[countdown, startTimer]);

  function handleChange(e) {
    setTextarea(e.target.value);
  }

  function calculateWordCount(text) {
    const strArray = text.trim().split(" ");
    return strArray.filter(word => word !== "").length;
  }

  function resetGame() {
    setCountdown(startingTime);
    setWordCount(0);
    setTextarea("");
  }

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
        />

        <h4>Time Remaining: {countdown}</h4>
        <button
          style={styles} 
          onClick={() => {
            countdown === 0 && resetGame()
            setStartTimer(prevState => (!prevState))
          }}
          disabled={startTimer}
        >
          Start Game
        </button>
        <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
