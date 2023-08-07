export interface ButtonProps {
  title: string;
  handleClick: () => void;
};

export interface Option {
  id: string;
  name: string;
};

export interface FilterProps {
  title: string;
  options: Option[];
};

export interface Filters {
  model?: string;
  fuel?: string;
  year?: string;
};

