import { useState } from 'react';
import style from './likedbutton.module.css';

export function LikeButton({ onClick }) {
  const [counter, setCounter] = useState(0);
  const [backDiv, setBackDiv] = useState('purple');
  const background = ['blue', 'green', 'yellow', 'orange', 'red', 'purple'];

  const divStyle = {
    backgroundColor: backDiv,
  };

  function sumAndChange() {
    setCounter(counter + 1);
    setBackDiv(
      counter < background.length
        ? background[counter]
        : background[counter - background.length]
    );
  }

  return (
    <div className={style.container}>
      <button className={style.btn} style={divStyle} onClick={sumAndChange}>
        {counter} Likes
      </button>
    </div>
  );
}
