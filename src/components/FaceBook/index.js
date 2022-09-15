import data from '../../data/berlin.json';
import { IdCard } from '../IdCard';

export function FaceBook() {
  console.log(data);
  return (
    <div>
      {data.map((currentProfile) => {
        return (
          <IdCard
            lastName={currentProfile.lastName}
            firstName={currentProfile.firstName}
            country={currentProfile.country}
            picture={currentProfile.img}
          />
        );
      })}
    </div>
  );
}
