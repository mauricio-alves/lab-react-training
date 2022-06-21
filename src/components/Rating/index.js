export function Rating({ children }) {
  const rate = Number(children);

  if (rate < 0.5) {
    children = '☆ ☆ ☆ ☆ ☆';
  } else if (rate < 1.5) {
    children = '★ ☆ ☆ ☆ ☆';
  } else if (rate < 2.5) {
    children = '★ ★ ☆ ☆ ☆';
  } else if (rate < 3.5) {
    children = '★ ★ ★ ☆ ☆';
  } else if (rate < 4.5) {
    children = '★ ★ ★ ★ ☆';
  } else {
    children = '★ ★ ★ ★ ★';
  }

  return <p>{children}</p>;
}
