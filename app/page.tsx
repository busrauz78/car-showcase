import React from "react";
import {  CarCard, Filter, Landing, Search } from "@/components";
import { fetchData, Filters, FUELS, HomeProps, YEARS } from "@/shared";

export default async function Home({ params }: HomeProps) {
  const carsData = await fetchData(params);

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
        <Filter options={FUELS} title="fuel"  />
        <Filter options={YEARS} title="year"  />
        </div>
      </div>
      <div className="home__cars-container mt-20">
        {carsData ? <div className="flex flex-row flex-wrap gap-2">
          {carsData.map(car => <CarCard car={car} />)}
        </div>: <div>There is no car</div>}
      </div>
    </div>
    </main>
  )
}
