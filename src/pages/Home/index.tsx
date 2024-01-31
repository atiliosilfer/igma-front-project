import { Avatar } from '../../components/Avatar'
import { Header } from './styles'
import Logo from '../../assets/LogoHeader.svg'

export function Home() {
  return (
    <>
      <Header>
        <img src={Logo} alt="logo" />
        <Avatar />
      </Header>
    </>
  )
}
