import { useStorage } from '@vueuse/core'

export const langs = useStorage('langs', {
  sans: true,
  trans: true,
  words: true,
  text: true,
  eng: false,
})
