'use client';
import { CarCardProps } from '@/shared';
import Image from 'next/image';
import Button from './Button';

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  return (
    <div className="car-card">
      <div className="car-card__header">
        <Image
          src="/assets/landing.png"
          width={200}
          height={100}
          alt="CarHub"
        />
      </div>
      <div className="car-card__content">
        <h4 className="car-card__title">
          {make} {model}
        </h4>
        <div className="car-card__features">
          <div className="car-card__feature">
            <Image src="/assets/gas.svg" alt="CarHub" width={15} height={15} />
            <p className="car-card__feature-text">{city_mpg} MPG</p>
          </div>
          <div className="car-card__feature">
            <Image src="/assets/tire.svg" alt="CarHub" width={15} height={15} />
            <p className="car-card__feature-text">{drive.toUpperCase()}</p>
          </div>
          <div className="car-card__feature">
            <Image src="/assets/steering-wheel.svg" alt="CarHub" width={15} height={15} />
            <p className="car-card__feature-text">{transmission === 'a' ? 'Automatic' : 'Manual' }</p>
          </div>
        </div>
        <div className="car-card__footer">
          <div className="car-card__price">
          <span className="car-card__price-text">$599</span>

          </div>
          <div className="car-card__action">
            <Button title="Show more" handleClick={() => null} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarCard;
