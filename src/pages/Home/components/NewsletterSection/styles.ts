import styled from 'styled-components'

export const NewsletterSectionContainer = styled.section`
  margin-bottom: ${(props) => props.theme.spacingStack.xxl};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewsletterSectionForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 303px;

  span {
    margin-bottom: ${(props) => props.theme.spacingStack.xxs};
  }

  span:first-child {
    font-size: ${(props) => props.theme.fontSize.xxs};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    line-height: ${(props) => props.theme.lineHeight.sm};
    text-align: left;
    color: ${(props) => props.theme.baseColors.darkMain};

    margin-bottom: ${(props) => props.theme.spacingStack.md};
  }

  p {
    font-size: ${(props) => props.theme.fontSize.xs};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    line-height: ${(props) => props.theme.lineHeight.lg};
    text-align: left;
    color: ${(props) => props.theme.baseColors.darkMain};

    margin-bottom: ${(props) => props.theme.spacingStack.md};
  }

  button {
    margin-top: ${(props) => props.theme.spacingStack.xs};
  }
`
