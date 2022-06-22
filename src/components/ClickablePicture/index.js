import photo from '../../assets/images/maxence.png';
import photoWithGlasses from '../../assets/images/maxence-glasses.png';
import { useState } from 'react';

export function ClickablePicture(props) {
  const [image, setImage] = useState(photo);

  function changeImage() {
    if (image === photo) {
      setImage(photoWithGlasses);
    } else {
      setImage(photo);
    }
  }

  return (
    <div>
      <img onClick={changeImage} src={image} alt="selfie of a man" />
    </div>
  );
}
