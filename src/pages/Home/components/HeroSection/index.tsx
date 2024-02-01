import { useEffect, useRef } from 'react'
import { HeroSectionContainer } from './styles'
import MagmaLarge from '../../../../assets/Image.png'
import VectorHero from '../../../../assets/vectorHero.svg'
import IgmaLogotype from '../../../../assets/logotipoIgma.svg'

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    const context = canvas.getContext('2d')

    if (!context) return

    const backgroundImage = new Image()
    const overlayImage = new Image()

    backgroundImage.src = MagmaLarge
    overlayImage.src = VectorHero

    backgroundImage.onload = function () {
      context.drawImage(backgroundImage, 16, 0, 422, canvas.height)

      const overlayX = 0
      const overlayY = canvas.height / 2 - overlayImage.height / 2
      context.drawImage(overlayImage, overlayX, overlayY)
    }
  }, [])

  return (
    <HeroSectionContainer>
      <div>
        <canvas ref={canvasRef} id="myCanvas" width="438" height="680" />
      </div>
      <div>
        <span>
          Prazer, somos <img src={IgmaLogotype} alt="igma logotipe" />
        </span>

        <h1>
          Acreditamos em um mundo onde experiências incríveis são essenciais.
        </h1>

        <p>
          Unimos design e tecnologia para resolver problemas complexos de
          empresas. Criamos produtos digitais que revolucionam o relacionamento
          entre empresas e consumidores.
        </p>
      </div>
    </HeroSectionContainer>
  )
}
