module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'htmlacademy/react-typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: 'tsconfig.json',
  },
  settings: { react: { version: 'detect' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'check-file/filename-naming-convention': [
      'error',
      { 'src/components/**/*.{jsx,tsx,js,ts}': 'PASCAL_CASE' },
    ],
    'check-file/folder-naming-convention': [
      'error',
      { 'src/components/**/*': 'PASCAL_CASE' },
    ],
  },
};
