// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
    typescript: true,
    react: true,
    vue: false,
    stylistic: {
        indent: 2, // 4, or 'tab'
        quotes: 'single', // or 'double'
    },
})