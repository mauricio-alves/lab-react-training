import style from './drivercard.module.css';
import { Rating } from '../Rating';

export function DriverCard({ name, rating, img, car }) {
  return (
    <div className={style.container}>
      <img src={img} alt="driver selfie" />
      <div className={style.content}>
        <h3>{name}</h3>
        <Rating children={rating} />
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
}
