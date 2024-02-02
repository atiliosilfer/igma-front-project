import { InputHTMLAttributes } from 'react'
import { CustomInput, ErrorMessage } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'md' | 'lg'
  error?: string
}

export function Input({ error, variant, ...rest }: InputProps) {
  return (
    <>
      <CustomInput error={error} variant={variant} {...rest} />
      <ErrorMessage>{error}</ErrorMessage>
    </>
  )
}
