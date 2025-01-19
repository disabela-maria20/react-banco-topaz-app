import { ButtonHTMLAttributes } from 'react'
import style from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps) => {
  return <button className={style.btn} {...props}>{children}</button>
}

export default Button
