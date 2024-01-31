import { InputHTMLAttributes } from 'react'
import { CustomInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'md' | 'lg'
}

export function Input({ ...props }: InputProps) {
  return <CustomInput {...props} />
}
