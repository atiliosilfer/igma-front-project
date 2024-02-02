import { ButtonHTMLAttributes } from 'react'
import { CustomAvatar } from './styles'
import { User } from '@phosphor-icons/react/dist/ssr'
import { defaultTheme } from '../../styles/themes/default'

interface AvatarProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'md' | 'lg'
}

export function Avatar({ variant, children, ...props }: AvatarProps) {
  return (
    <CustomAvatar variant={variant} {...props}>
      {children !== undefined ? (
        children
      ) : (
        <User
          size={24}
          color={
            props.disabled
              ? defaultTheme.baseColors.darkSecondary
              : defaultTheme.brandColors.primaryContrast
          }
        />
      )}
    </CustomAvatar>
  )
}
