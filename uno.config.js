import {
  defineConfig,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  extractorSplit,
} from 'unocss'

import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      cdn: 'https://esm.sh/',
      scale: 1.2,
      warn: true,
      unit: 'em',
    }),
    presetWebFonts(),
  ],
  extractors: [extractorSplit, extractorPug()],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
