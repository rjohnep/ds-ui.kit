module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  plugins: ['react', 'react-hooks', 'jest'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  settings: {
    react: {
      // eslint-disable-next-line global-require
      version: require('./package.json').dependencies.react
    }
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'max-len': ['error', { code: 100 }],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': ['error', { consistent: true }],
    'no-unused-vars': 2,
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'jest/no-large-snapshots': ['warn', { maxSize: 16, inlineMaxSize: 8 }],
    'jsx-a11y/label-has-associated-control': 0,
    // 'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': ['error', 'never', { svg: 'always' }],
    // 'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/jsx-uses-vars': 2,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/sort-comp': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 0
  }
};
