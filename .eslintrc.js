module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:flowtype/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: ['prettier', 'jest', 'flowtype', 'unicorn'],
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    'unicorn/filename-case': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-underscore-dangle': ['error', { allow: ['__'] }],
    semi: 'error'
  }
};
