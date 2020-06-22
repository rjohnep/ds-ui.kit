module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import'
  ],
  env: {
    production: {
      only: ['src'],
      plugins: [
        '@babel/plugin-transform-react-inline-elements',
        '@babel/plugin-transform-react-constant-elements'
      ]
    }
  }
};
