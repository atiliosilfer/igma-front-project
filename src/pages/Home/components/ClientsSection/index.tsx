import { ClientsSectionContainer } from './styles'
import MRV from '../../../../assets/mrv.svg'
import Comgas from '../../../../assets/comgas.svg'
import Centauro from '../../../../assets/centauro.svg'
import Honda from '../../../../assets/honda.svg'
import BrasilPrev from '../../../../assets/brasilprev.svg'
import Bayer from '../../../../assets/bayer.svg'
import Neoenergia from '../../../../assets/neoenergia.svg'
import Ambev from '../../../../assets/ambev.svg'
import IDB from '../../../../assets/idb.svg'
import CVC from '../../../../assets/cvc.svg'
import Google from '../../../../assets/google.svg'
import SirioLibanes from '../../../../assets/hsl.svg'

export function ClientsSection() {
  return (
    <ClientsSectionContainer>
      <p>
        Expressamos mais de 20 anos de experiência criando plataformas digitais
        para as maiores empresas do Brasil, impactando milhões de pessoas.
      </p>

      <div>
        <img src={MRV} alt="MRV logo" />
        <img src={BrasilPrev} alt="BrasilPrev logo" />
        <img src={IDB} alt="IDB logo" />

        <img src={Comgas} alt="Comgas logo" />
        <img src={Bayer} alt="Bayer logo" />
        <img src={CVC} alt="CVC logo" />

        <img src={Centauro} alt="Centauro logo" />
        <img src={Neoenergia} alt="Neoenergia logo" />
        <img src={Google} alt="Google logo" />

        <img src={Honda} alt="Honda logo" />
        <img src={Ambev} alt="Ambev logo" />
        <img src={SirioLibanes} alt="SirioLibanes logo" />
      </div>
    </ClientsSectionContainer>
  )
}
