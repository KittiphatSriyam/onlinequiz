module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': 'off',
    'arrow-parens': 'off',
    'no-plusplus': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
    'no-unused-vars': 'off',
    'no-restricted-syntax': 'off',
    'prefer-const': 'off',
  },
};
