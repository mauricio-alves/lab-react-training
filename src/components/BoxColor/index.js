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

// version 2
export function BoxColor({ r, g, b }) {
  return (
    <div
      className="container"
      style={{ backgroundColor: `rgb(${r},${g},${b})` }}
    >
      rgb({r},{g},{b})
    </div>
  );
}

