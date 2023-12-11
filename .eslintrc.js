module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-native', 'import'],
  rules: {
    'prettier/prettier': 1,
    'react-native/no-unused-styles': 2,
    'react-native/no-inline-styles': 1,
    'react-native/no-color-literals': 1,
    'react-native/no-raw-text': 1,
    'no-undef': 'error',
    'react-native/sort-styles': [
      1,
      'asc',
      {
        ignoreClassNames: false,
        ignoreStyleProperties: false,
      },
    ],
    'react/prop-types': 0,
    'react/forbid-prop-types': [1, { forbid: ['any', 'array'] }],
    'import/no-unused-modules': [2, { unusedExports: true }],
    'import/no-unresolved': 2,
    'import/no-cycle': 1,
    'import/order': [
      1,
      {
        groups: [
          'builtin',
          'external',
          ['internal', 'parent', 'sibling', 'index', 'object', 'type'],
        ],
        'newlines-between': 'always',
      },
    ],
    'no-prototype-builtins': 0,
    'max-lines': [1, { max: 500 }],
    'no-console': [2, { allow: ['warn', 'error'] }],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        alias: {
          '@env': './',
        },
      },
    },
  },
};
