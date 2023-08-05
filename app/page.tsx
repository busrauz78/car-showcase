import {  Filter, Landing } from "@/components";
import { BRANDS, FUELS, YEARS } from "@/shared";
import React from "react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Landing />
      <div id="discover" className="home__discover">
      <div className="home__discover-container">
        <h2 className="home__discover-title">Car Catalogue</h2>
        <p>Explore out cars you might like</p>
      </div>
      <div className="home__filters">
        <Filter options={BRANDS} title="Brand"  />
        <Filter options={FUELS} title="Fuel"  />
        <Filter options={YEARS} title="Year"  />
      </div>
    </div>
    </main>
  )
}
