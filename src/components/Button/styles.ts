import { css, styled } from 'styled-components'

interface CustomButtonProps {
  variant?: 'md' | 'lg'
}

export const CustomButton = styled.button<CustomButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.baseColors.lightContrast};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  line-height: ${(props) => props.theme.lineHeight.lg};

  border-radius: ${(props) => props.theme.borderRadius.none};
  border-color: ${(props) => props.theme.baseColors.darkHighlight};
  border-style: none;
  background-color: ${(props) => props.theme.baseColors.darkHighlight};

  outline: 0;
  box-shadow: none;

  -webkit-transition: background-color 2s ease-out;
  -moz-transition: background-color 2s ease-out;
  -o-transition: background-color 2s ease-out;
  -ms-transition: background-color 2s ease-out;
  transition: background-color 2s ease-out;

  cursor: pointer;

  &:disabled {
    background-color: ${(props) => props.theme.baseColors.darkDisabled};
    color: ${(props) => props.theme.baseColors.lightSecondary};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.baseColors.darkMain};

    -webkit-transition: background-color 0s;
    -moz-transition: background-color 0s;
    -o-transition: background-color 0s;
    -ms-transition: background-color 0s;
    transition: background-color 0s;
  }

  &:focus {
    border-width: ${(props) => props.theme.borderWidths.thin};
    border-color: ${(props) => props.theme.brandColors.primaryMain};
    background-color: ${(props) => props.theme.baseColors.darkMain};
    border-style: solid;
  }

  &:not(:disabled)&:active {
    color: ${(props) => props.theme.baseColors.lightSecondary};
    background-color: ${(props) => props.theme.baseColors.darkHighlight};
    border-style: none;
  }

  ${(props) =>
    props.variant === 'lg'
      ? css`
          height: 56px;
          min-width: 160px;
          font-size: ${(props) => props.theme.fontSize.xs};
          padding: ${(props) => props.theme.spacingInline.md};
        `
      : css`
          height: 48px;
          min-width: 120px;
          font-size: ${(props) => props.theme.fontSize.xxs};
          padding: ${(props) => props.theme.spacingInline.sm};
        `}
`
