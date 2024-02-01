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
