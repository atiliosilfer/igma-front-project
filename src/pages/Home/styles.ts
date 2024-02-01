import { styled } from 'styled-components'

export const Header = styled.header`
  top: 0;
  width: 100%;
  height: 80px;
  padding-right: 72px;

  position: fixed; // this is the key

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Body = styled.body`
  padding: 0 72px;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;

  padding-top: ${(props) => props.theme.spacingStack.sm};
  padding-bottom: ${(props) => props.theme.spacingStack.xxl};
  margin: 0 72px;

  border-top: 1px solid ${(props) => props.theme.baseColors.darkMain};

  font-size: ${(props) => props.theme.fontSize.xxs};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: ${(props) => props.theme.lineHeight.lg};
  text-align: left;
  color: ${(props) => props.theme.baseColors.darkMain};
`
