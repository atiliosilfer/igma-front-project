import { css, styled } from 'styled-components'

interface CustomAvatarProps {
  variant?: 'md' | 'lg'
}

export const CustomAvatar = styled.button<CustomAvatarProps>`
  border-radius: ${(props) => props.theme.borderRadius.pill};
  background-color: ${(props) => props.theme.brandColors.primaryMain};
  border-style: none;
  box-shadow: none;
  cursor: pointer;

  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  -ms-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;

  &:disabled {
    background-color: ${(props) => props.theme.baseColors.darkDisabled};

    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.brandColors.primaryLight};

    -webkit-transition: background-color 0s;
    -moz-transition: background-color 0s;
    -o-transition: background-color 0s;
    -ms-transition: background-color 0s;
    transition: background-color 0s;
  }

  :focus {
    background-color: ${(props) => props.theme.brandColors.primaryLight};
    border-width: ${(props) => props.theme.borderWidths.thin};
    border-color: ${(props) => props.theme.brandColors.primaryContrast};
    border-style: solid;
  }

  &:not(:disabled)&:active {
    background-color: ${(props) => props.theme.brandColors.primaryDark};
  }

  ${(props) =>
    props.variant === 'lg'
      ? css`
          height: 48px;
          width: 48px;
        `
      : css`
          height: 40px;
          width: 40px;
        `}
`
