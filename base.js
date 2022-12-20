/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  plugins: ['only-warn'],
  extends: ['eslint:recommended', 'prettier'],
  reportUnusedDisableDirectives: true,
  rules: {
    'no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '_.*',
        varsIgnorePattern: '_.*',
        destructuredArrayIgnorePattern: '_.*',
      },
    ],
    'no-console': 'warn',
    'no-alert': 'warn',
    camelcase: 'warn',
    'no-undef': 'off',
    'require-await': 'warn',
    'no-return-await': 'warn',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*',
        '**/__specs__/*',
        '**/__mocks__/**',
        '**/e2e/**',
        '**/*.test.*',
        '**/*.spec.*',
      ],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
