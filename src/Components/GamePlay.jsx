import React from "react";
import styled from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);


  const resetScore = ()=>{
    setScore(0);
  }
  const rules = ()=>{
    setShowRules((prev)=>!prev);  
  }


  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6 + 1);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return; //acting as a guard check if any number is selected or not
    }
    const randomNumber = generateRandomNumber();
    setCurrentDice((prev) => randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined); //to unset the selected number
  };

  return (
    <MainContainer>
      <div className="top-section">
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div className="bottom-section">
        <RollDice currentDice={currentDice} roleDice={roleDice} resetScore={resetScore} rules={rules} showRules={showRules}/>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .bottom-section {
    display: grid;
    place-content: center;
  }
`;
