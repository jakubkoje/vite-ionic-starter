/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  'root': true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended'
  ],
  'env': {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'vue/multi-word-component-names': 'off',
    'no-trailing-spaces': 'error',
    'indent': ['error', 2]
  }
}
