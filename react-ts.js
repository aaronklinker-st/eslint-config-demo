/**
 * @type {import('eslint').ESLint.ConfigData}
 */
module.exports = {
  extends: [
    './typescript',
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/jsx-sort-props": [
      "warn",
      {
        "ignoreCase": false,
        "callbacksLast": true,
        "shorthandFirst": false,
        "shorthandLast": true,
        "noSortAlphabetically": true,
        "reservedFirst": ["key", "ref"]
      }
    ],
  },
};
