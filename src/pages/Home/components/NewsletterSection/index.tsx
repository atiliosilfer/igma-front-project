import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'

export function NewsletterSection() {
  return (
    <section>
      <form onSubmit={() => console.log('form chamado')}>
        <span>Assine nossa newsletter</span>

        <p>
          Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a cada
          15 dias.
        </p>

        <Input type="text" placeholder="Nome" />
        <Input type="email" placeholder="Email" />

        <Button />
      </form>

      <div>animação</div>
    </section>
  )
}
