import { Avatar } from '../../components/Avatar'
import { Body, Footer, Header } from './styles'
import Logo from '../../assets/LogoHeader.svg'
import { HeroSection } from './components/HeroSection'
import { ClientsSection } from './components/ClientsSection'
import { NewsletterSection } from './components/NewsletterSection'

export function Home() {
  return (
    <>
      <Header>
        <img src={Logo} alt="logo" />
        <Avatar />
      </Header>

      <Body>
        <HeroSection />
        <ClientsSection />
        <NewsletterSection />
      </Body>

      <Footer>
        <span>Igma Delightful Digital Products Company.</span>

        <span>© Copyright 2023</span>
      </Footer>
    </>
  )
}
