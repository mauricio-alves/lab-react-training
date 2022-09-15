export function NumbersTable({ limit }) {
  let numbers = [];

  for (let i = 0; i <= limit; i++) {
    numbers.push(i);
  }
  console.log(numbers);

  return (
    <div>
      {numbers.map((currentNumber) => {
        return currentNumber % 2 === 0 ? (
          <div style={{ backgroundColor: 'red' }}>{currentNumber}</div>
        ) : (
          <div>{currentNumber}</div>
        );
      })}
    </div>
  );
}
