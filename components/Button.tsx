
'use client'

import { ButtonProps } from "@/shared";


const Button = ({title, handleClick}: ButtonProps) => {
  return (
    <button onClick={handleClick} className="button">
      <span>{title}</span>
    </button>
  )
}
export default Button;