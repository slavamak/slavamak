import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
    </>
  )
})

export const head: DocumentHead = {
  title: 'Slava Maksimov | Freelance developer and entrepreneur',
  meta: [
    {
      name: 'description',
      content:
        'Building better websites for the people. I am focused on the UI to provide a fast, slick, and resilient user experience.',
    },
  ],
}
