import {useState, useRef, useEffect} from "react";

export default function useTimer(defaultTime = 10) {

  //create state
  const [textarea, setTextarea] = useState("");
  const [countdown, setCountdown] = useState(defaultTime);
  const [startTimer, setStartTimer] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const inputRef = useRef(null);

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
    setCountdown(defaultTime);
    setWordCount(0);
    setTextarea("");
  }


  return [resetGame, calculateWordCount, handleChange, textarea, countdown, startTimer, inputRef, wordCount]
}