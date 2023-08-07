export interface ButtonProps {
  title: string;
  handleClick: () => void;
}

export interface Option {
  id: string;
  name: string;
}

export interface FilterProps {
  title: string;
  options: Option[];
}

export interface Filters {
  model?: string;
  fuel?: string;
  year?: string;
}

export interface HomeProps {
  params: Filters;
}

export interface Car {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarCardProps {
  car: Car;
}
