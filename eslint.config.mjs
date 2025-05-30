// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  react: true,
  vue: false,
  stylistic: {
    indent: 'tab', // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
})
