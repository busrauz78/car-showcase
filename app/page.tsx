import React from 'react';
import { CarCard, Filter, Landing, Search } from '@/components';
import { fetchData } from '@/api';
import { HomeProps } from '@/types';
import { FUELS, YEARS } from '@/constants';

export default async function Home({ searchParams }: HomeProps) {
  const carsData = await fetchData(searchParams);
  const isDataEmpty =
    !Array.isArray(carsData) || carsData.length < 1 || !carsData;

  return (
    <main className="overflow-hidden">
      <Landing />
      <div id="discover" className="home__discover">
        <div className="home__discover-container">
          <h2 className="home__discover-title">Car Catalogue</h2>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters-container">
          <Search />
          <div className="home__filters">
            <Filter options={FUELS} title="fuel" />
            <Filter options={YEARS} title="year" />
          </div>
        </div>
        <div className="home__cars-container">
          {!isDataEmpty ? (
            <div className="home__cars-wrapper">
              {carsData?.map((car, idx) => (
                <CarCard key={idx} car={car} />
              ))}
            </div>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
