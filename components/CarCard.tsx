'use client';
import { CarCardProps } from '@/types';
import { calculateCarRent } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Button } from '.';

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card">
      <div className="car-card__price">
        <span className="car-card__price-text">$</span>
        <span className="car-card__price-text">{carRent}</span>
        <span>/day</span>
      </div>

      <div className="car-card__header">
        <Image
          src="/assets/car-mock.png"
          width={300}
          height={200}
          alt="CarHub"
          className="object-contain"
          priority
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
            <p className="car-card__feature-text">{drive?.toUpperCase()}</p>
          </div>
          <div className="car-card__feature">
            <Image
              src="/assets/steering-wheel.svg"
              alt="CarHub"
              width={15}
              height={15}
            />
            <p className="car-card__feature-text">
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className="car-card__feature">
            <Image src="/assets/calendar.png" alt="CarHub" width={15} height={15} />
            <p className="car-card__feature-text">{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarCard;
