import style from './idcard.module.css';

export function IdCard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {
  return (
    <div className={style.container}>
      <div>
      <img src={picture} alt="selfie of a person" />
      </div>
      <div className={style.content}>
      <p><strong>First name:</strong> {firstName}</p>
      <p><strong>Last name:</strong> {lastName}</p>
      <p><strong>Gender: </strong>{gender}</p>
      <p><strong>Height: </strong>{height}m</p>
      <p><strong>Birth: </strong>{birth.toDateString()}</p>
      </div>
    </div>
  );
}
