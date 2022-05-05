module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "xo",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    "capitalized-comments": "off",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "warn",
    "padding-line-between-statements": "warn",
  },
};
