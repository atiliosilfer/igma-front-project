import { styled, css } from 'styled-components'

interface CustomInputProps {
  variant?: 'md' | 'lg'
}

export const CustomInput = styled.input<CustomInputProps>`
  vertical-align: middle;
  color: ${(props) => props.theme.baseColors.darkHighlight};

  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: ${(props) => props.theme.lineHeight.xl};
  background-color: transparent;
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: ${(props) => props.theme.baseColors.darkHighlight};
  outline: 0;
  box-shadow: none;

  &:disabled {
    border-color: ${(props) => props.theme.baseColors.darkDisabled};
    color: ${(props) => props.theme.baseColors.darkDisabled};

    cursor: not-allowed;

    &::placeholder {
      color: ${(props) => props.theme.baseColors.darkDisabled};
    }
  }

  &:not(:disabled):hover {
    border-width: 0 0 3px 0;
  }

  &:focus {
    border-width: 1px 1px 2px 1px;
    border-color: ${(props) => props.theme.brandColors.primaryLight};
    border-bottom-color: ${(props) => props.theme.baseColors.darkHighlight};
  }

  &:not(:disabled)&:active {
    font-weight: ${(props) => props.theme.fontWeight.semibold};
  }

  ${(props) =>
    props.variant === 'lg'
      ? css`
          height: 64px;
          font-size: ${(props) => props.theme.fontSize.md};
        `
      : css`
          height: 56px;
          font-size: ${(props) => props.theme.fontSize.xs};
        `}
`
