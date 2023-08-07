import React from "react";
import {  Filter, Landing, Search } from "@/components";
import { fetchData, Filters, FUELS, YEARS } from "@/shared";

export default async function Home({searchParams}: HomeProps) {
  const carsData = await fetchData(searchParams);

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
    </div>
    </main>
  )
}
