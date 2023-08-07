import { Filters } from "..";

export const fetchData = async(filters: Filters) => {
  const { model, fuel, year } = filters;
  console.log(model, fuel, year, process.env.NEXT_PUBLIC_RAPID_API_KEY);
  return fuel;
};