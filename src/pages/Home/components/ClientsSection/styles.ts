import styled from 'styled-components'

export const ClientsSectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 94px 0px;

  p {
    width: 421px;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: ${(props) => props.theme.fontWeight.semibold};
    line-height: ${(props) => props.theme.lineHeight.lg};
    text-align: left;
    color: ${(props) => props.theme.baseColors.darkMain};
  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 60px;
  }
`
