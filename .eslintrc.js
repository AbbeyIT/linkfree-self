/**
 * @type {import("eslint").Linter.Config}
 */
const eslintConfig = {
  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "standard",
    "standard-with-typescript",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "const-case",
    "editorconfig",
    "filenames",
    "simple-import-sort",
    "import",
    "react",
    "jsx-a11y",
    "json-format",
    "tailwindcss",
  ],
  rules: {
    "comma-dangle": ["warn", "always-multiline"],
    "no-console": "warn",
    quotes: ["warn", "double"],
    "space-before-function-paren": ["warn", "never"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

module.exports = eslintConfig;
