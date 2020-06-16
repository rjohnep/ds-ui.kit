module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
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
    'max-len': ['error', { code: 100 }],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': ['error', {
      ObjectExpression: { consistent: true },
      ObjectPattern: { multiline: true },
      // 'ImportDeclaration': 'never',
      ExportDeclaration: { multiline: true, minProperties: 3 }
    }],
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
    'react/jsx-fragments': [2, 'element']
  }
};
