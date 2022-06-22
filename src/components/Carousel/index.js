import { useState } from 'react';

export function Carousel(images) {
  let [counter, setCounter] = useState(0);
  const [image, setImage] = useState(images.images[counter]);

  function changeRight() {
    setCounter(++counter);
    setImage(images.images[counter]);
  }

  function changeLeft() {
    setCounter(--counter);
    setImage(images.images[counter]);
  }

  return (
    <div>
      <img src={image} alt="selfie of a person" />
      <button onClick={changeLeft}>Left</button>
      <button onClick={changeRight}>Right</button>
    </div>
  );
}
