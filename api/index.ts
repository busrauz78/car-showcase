import { Car, Filters } from "@/types";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};


export const fetchData = async(filters: Filters) => {
  const {make, year, fuel} = filters;
	const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&year=${year}&fuel_type=${fuel}`, options);
		const result: Car[] = await response.json();
		return result;

};