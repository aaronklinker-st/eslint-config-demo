/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: ['./typescript', 'plugin:vue/vue3-strongly-recommended'],
  rules: {
    'vue/html-self-closing': [
      'warn',
      {
        html: {
          void: 'always',
        },
      },
    ],
  },
};
