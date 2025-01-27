import emptyDice from '../../assets/images/dice-empty.png';
import diceOne from '../../assets/images/dice1.png';
import diceTwo from '../../assets/images/dice2.png';
import diceThree from '../../assets/images/dice3.png';
import diceFour from '../../assets/images/dice4.png';
import diceFive from '../../assets/images/dice5.png';
import diceSix from '../../assets/images/dice6.png';

import style from './dice.module.css';
import { useState } from 'react';

export function Dice(props) {
  const dices = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
  const [dice, setDice] = useState(emptyDice);
  const random = Math.floor(Math.random() * 6);

  function changeDice() {
    setDice(emptyDice);
    setTimeout(() => {
      setDice(dices[random]);
    }, 1000);
  }

  return (
    <div className={style.container}>
      <img onClick={changeDice} src={dice} alt="dice" />
    </div>
  );
}

// version 2
export function Dice() {
  const dices = [
    emptyDice,
    diceOne,
    diceTwo,
    diceThree,
    diceFour,
    diceFive,
    diceSix,
  ];
  const [index, setIndex] = useState(0);

  function randomDice() {
    setInterval(() => {
      setIndex(Math.floor(Math.random() * (dices.length - 1)));
    }, 1000);
  }
  console.log(index);

  return (
    <div>
      <img
        src={dices[index]}
        alt="dice"
        style={{ width: '150px' }}
        onClick={randomDice}
      />
    </div>
  );
}
