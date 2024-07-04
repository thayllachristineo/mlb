module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-prettier',
    'prettier',
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    indent: ['error', 2],
  },
};
