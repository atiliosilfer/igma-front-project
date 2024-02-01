import styled from 'styled-components'

export const HeroSectionContainer = styled.section`
  margin-top: 80px;
  padding: 120px 109px 0px 109px;

  display: flex;
  align-items: flex-start;
  gap: 125px;
  justify-content: center;
`

export const HeroContent = styled.div`
  width: 384px;
  font-size: ${(props) => props.theme.fontSize.xxs};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: ${(props) => props.theme.lineHeight.xl};
  text-align: left;
  color: ${(props) => props.theme.baseColors.darkMain};

  span {
    display: flex;
    align-items: center;
    gap: ${(props) => props.theme.spacingStack.nano};
    margin-bottom: ${(props) => props.theme.spacingStack.xl};
  }

  h1 {
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    color: ${(props) => props.theme.baseColors.darkHighlight};
    line-height: 38.4px;
    margin-bottom: ${(props) => props.theme.spacingStack.xl};
  }

  p {
    font-size: ${(props) => props.theme.fontSize.xs};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    line-height: ${(props) => props.theme.lineHeight.lg};
  }
`
