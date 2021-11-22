module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',

    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },

  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    prototypejs: true,
  },

  rules: {
    'constructor-super': 2,
    'default-case': 2,
    'func-names': 0,
    'generator-star-spacing': 2,
    'jsx-quotes': ['warn', 'prefer-double'],
    'no-await-in-loop': 2,
    'no-const-assign': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-proto': 2,
    'no-tabs': 2,
    'no-this-before-super': 2,
    'no-unreachable': 2,
    'no-use-before-define': 2,
    'no-var': 2,
    'no-void': 2,
    'no-with': 2,
    'no-whitespace-before-property': 2,
    'one-var-declaration-per-line': 2,
    'prefer-arrow-callback': 2,
    'prefer-const': 1,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-await': 2,
    // 'require-jsdoc': 2,
    'require-yield': 2,
    'semi-spacing': 2,
    'symbol-description': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    semi: ['warn', 'never'],
    strict: 2,
    yoda: 2,
    'template-curly-spacing' : "off",
    indent: 'off',

    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],

    'generator-star-spacing': ['error', { before: false, after: true }],

    // specify the maximum depth that blocks can be nested
    'max-depth': ['off', 4],

    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',

    // limits the number of parameters that can be used in the function declaration.
    'max-params': ['off', 3],

    // specify the maximum number of statement allowed in a function
    'max-statements': ['off', 10],

    // restrict the number of statements per line
    'max-statements-per-line': ['off', { max: 1 }]
  },
};