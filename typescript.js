/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['./base', 'plugin:@typescript-eslint/recommended-requiring-type-checking'],
  plugins: ['@typescript-eslint', 'only-warn'],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '_.*',
        varsIgnorePattern: '_.*',
        destructuredArrayIgnorePattern: '_.*',
      },
    ],
    'no-return-await': 'warn',
    '@typescript-eslint/no-misused-promises': [
      'warn',
      {
        checksVoidReturn: {
          arguments: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: '*.d.ts',
      rules: {
        'no-unused-vars': 'off',
      },
    },
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
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
  ],
};
