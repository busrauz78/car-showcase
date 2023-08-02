
'use client'

import { ButtonProps } from "@/shared";


const Button = ({title, handleClick}: ButtonProps) => {
  return (
    <button onClick={handleClick} className="custom-btn bg-primary-blue text-white rounded-full mt-10">
      <span>{title}</span>
    </button>
  )
}
export default Button;