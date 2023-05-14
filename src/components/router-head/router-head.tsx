import { $, component$, useTask$, useSignal, useOnDocument } from '@builder.io/qwik'
import { useDocumentHead, useLocation } from '@builder.io/qwik-city'
import { isBrowser } from '@builder.io/qwik/build'

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */

export enum FaviconEnum {
  hidden = '/favicon-hidden.svg',
  visible = '/favicon.svg',
}

export const Favicon = component$(() => {
  const hidden = useSignal(false)
  const favicon = useSignal(FaviconEnum.visible)

  useTask$(({ track }) => {
    track(() => hidden.value)

    if (isBrowser) {
      favicon.value = hidden.value ? FaviconEnum.hidden : FaviconEnum.visible
    }
  })

  useOnDocument(
    'visibilitychange',
    $(() => (hidden.value = document.hidden))
  )

  return (
    <>
      <link rel="icon" href={favicon.value} type="image/svg+xml" />
      <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
      <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
    </>
  )
})

export const RouterHead = component$(() => {
  const head = useDocumentHead()
  const loc = useLocation()

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Favicon />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  )
})
