'use client';
import Image from 'next/image';
import React from 'react';
import { Button } from '.';

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing">
      <div className="landing__container">
        <h1 className="landing__title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="landing__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <Button title="Explore Cars" handleClick={handleScroll} />
      </div>
      <div className="landing__image-container">
        <div className="landing__image">
          <Image
            src="/assets/landing.png"
            alt="CarHub"
            fill
            className="object-contain"
          />
        </div>
        <div className="landing__image-overlay"></div>
      </div>
    </div>
  );
};
export default Hero;
