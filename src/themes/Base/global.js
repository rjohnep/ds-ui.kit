import { createGlobalStyle } from 'styled-components';

import theme from './theme';
import fonts from './fonts';

export default createGlobalStyle([
  `
  ${fonts};

  * {
    outline: none;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  body {
    display: flex;
    font: 400 ${theme.font.size} /${theme.font.lineHeight} ${theme.font.family};
    color: ${theme.palette.text.main};
    -webkit-touch-callout: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
]);
