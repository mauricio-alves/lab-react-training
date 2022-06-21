import style from '../Greetings/greetings.module.css';

export function Random({ min, max }) {
  let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)

  return (
    <div className={style.container}>
      <p>
        Random value between {min} and {max} => {randomNumber}
      </p>
    </div>
  );
}
