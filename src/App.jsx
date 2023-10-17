import { useState } from "react"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted]=useState(true);

  const toggleGamePlay = ()=>{
    setIsGameStarted((prev)=>!prev);
  };

  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGame toggle={setIsGameStarted}
    />}
    </>
  )
}

export default App
