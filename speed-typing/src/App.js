import React, {useState} from "react"

function App() {

  //create state for text area content
  const [textarea, setTextarea] = useState("");

  function handleChange(e) {
    setTextarea(e.target.value);
  }

  function calculateWordCount(text) {
    //string method to look for spaces
    const strArray = text.trim().split(" ");
    //bugs:
      //it counts each space as a new word

    console.log(strArray.length)
    return strArray.length;
  }

  return (
    <div className="container">
        <h1>Speed Typing Game</h1>
        <p className="paragraph">How fast can you type?</p>
        <textarea 
            onChange={handleChange}
            name="textarea"
            value={textarea}
        />

        <h4>Time Remaining: </h4>
        <button 
          onClick={() => calculateWordCount(textarea)}
        >
          Start Game
        </button>
        <h1>Word Count: </h1>
    </div>
  );
}

export default App;
