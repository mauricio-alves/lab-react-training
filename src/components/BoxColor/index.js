import style from './boxcolor.module.css';

export function BoxColor({ r, g, b }) {
  const divStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
  };

  return (
    <div className={style.container} style={divStyle}>
      <strong>{divStyle.backgroundColor}</strong>
    </div>
  );
}
