import React from "react";
import styled from "styled-components";
import { useState } from "react";

const RollDice = ({currentDice, roleDice, resetScore, rules, showRules}) => {

  return (
    <RollDiceContainer>
      <div className="image-container" onClick={roleDice}>
        <img src={`/Images/dice/dice_${currentDice}.png`} alt="dice 1" />
        <p>Click on Dice to roll</p>
      </div>
      <ButtonContainer>
        <button className="first-btn" onClick={()=>{resetScore()}}>Reset Score</button>
        <button className="second-btn" onClick={()=>{rules()}}>{showRules ? "Hide" : "Show"} Rules</button>
      </ButtonContainer>
    </RollDiceContainer>
  );
};

export default RollDice;

const ButtonContainer = styled.div`
  display: flex;
  width: 263px;
  flex-direction: column;
  row-gap: 24px;
`;

const RollDiceContainer = styled.div`
  margin-top: 48px;
  max-height: 595px;
  max-width: 263px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 36px;
  p {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
  }
  .first-btn {
    border-radius: 5px;
    border: 1px solid #000;
    background: #fff;
    padding: 10px 18px;
    cursor: pointer;
  }
  .second-btn {
    border-radius: 5px;
    background: #000;
    color: white;
    padding: 10px 18px;
    cursor: pointer;
  }
  .image-container{
    display: flex;
    flex-direction: column;
    row-gap: 15px;
  }
`;
