import { useForm } from 'react-hook-form'
import { Button } from '../../../../components/Button'
import { Input } from '../../../../components/Input'
import { NewsletterSectionContainer, NewsletterSectionForm } from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const subscribeFormValidationSchema = zod.object({
  name: zod.string({ description: 'Campo obrigatório' }),
  email: zod
    .string({ description: 'Campo obrigatório' })
    .email('Email invalido!'),
})

type SubscribeForm = zod.infer<typeof subscribeFormValidationSchema>

export function NewsletterSection() {
  const subscribeForm = useForm<SubscribeForm>({
    resolver: zodResolver(subscribeFormValidationSchema),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = subscribeForm

  function handleSubscribe(data: SubscribeForm) {
    console.log(data)
  }

  return (
    <NewsletterSectionContainer>
      <NewsletterSectionForm onSubmit={handleSubmit(handleSubscribe)}>
        <span>Assine nossa newsletter</span>

        <p>
          Desenvolva-se conosco com conteúdos sobre Tecnologia e Design a cada
          15 dias.
        </p>

        <Input
          id="name"
          required
          placeholder="Nome"
          {...register('name')}
          error={errors.name?.message}
        />

        <Input
          id="email"
          required
          placeholder="Email"
          {...register('email')}
          error={errors.email?.message}
        />

        <Button type="submit">Assinar Newsletter</Button>
      </NewsletterSectionForm>

      <div>animação</div>
    </NewsletterSectionContainer>
  )
}
