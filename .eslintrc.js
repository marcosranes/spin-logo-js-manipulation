module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true, // added 06/18/21 *optional
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  //npm install eslint babel-eslint --save-dev OR npm install --save-dev babel-eslint
  //npm i -D babel-eslint <- this solve the problem...
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      // added 06/18/21 *optionals
      modules: true,
      experimentalObjectRestSpread: true,
      //
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    // rules added 06/18/21 *optionals
    'react/no-set-state': 'off',
    'comma-dangle': 0,
    'react/jsx-uses-vars': 1,
    'react/display-name': 1,
    'no-unused-vars': 'warn',
    'no-console': 1,
    'no-unexpected-multiline': 'warn',
    //
  },
};
