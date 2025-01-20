import style from './Input.module.scss'

import { forwardRef, InputHTMLAttributes, useId } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string, 
  ErrorText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ type = 'text', name='', label='', ErrorText = "",  ...props }, ref) => {
  const inputId = useId()
  const hasErro = ErrorText.length > 0

  return (
    <div className={style.areaInput}>
      <label htmlFor={inputId}>
        <span>{label}</span>
        <input id={inputId} type={type} name={name} ref={ref} {...props} />
      </label>  
      { hasErro && <span className={style.erro}>{ErrorText}</span>} 
    </div>
   
  )
})

export default Input
