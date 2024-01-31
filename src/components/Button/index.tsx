import { ButtonHTMLAttributes } from 'react'
import { CustomButton } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'md' | 'lg'
}

export function Button({ variant, children, ...props }: ButtonProps) {
  return (
    <CustomButton variant={variant} {...props}>
      {children}
    </CustomButton>
  )
}
