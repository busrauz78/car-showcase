import { Filters } from "..";
import { Car } from "../types";

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};


export const fetchData = async(filters: Filters) => {
  const {model, year, fuel} = filters;
	const response = await fetch(url, options);
  const result: Car[] = await response.json();
  return result;
};