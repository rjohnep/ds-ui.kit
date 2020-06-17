import { css } from 'styled-components';

import MuliSemiBoldW2 from './Muli/Muli-SemiBold.woff2';
import MuliSemiBoldW from './Muli/Muli-SemiBold.woff';
import MuliExtraBoldW2 from './Muli/Muli-ExtraBold.woff2';
import MuliExtraBoldW from './Muli/Muli-ExtraBold.woff';
import MuliItalicW2 from './Muli/Muli-Italic.woff2';
import MuliItalicW from './Muli/Muli-Italic.woff';
import MuliLightW2 from './Muli/Muli-Light.woff2';
import MuliLightW from './Muli/Muli-Light.woff';
import MuliW2 from './Muli/Muli.woff2';
import MuliW from './Muli/Muli.woff';
import MuliBoldW2 from './Muli/Muli-Bold.woff2';
import MuliBoldW from './Muli/Muli-Bold.woff';

export const fontFamily = 'Muli';

export default css`
  @font-face {
    font-family: ${fontFamily};
    src: url('${MuliSemiBoldW2}') format('woff2'),
         url('${MuliSemiBoldW}') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${fontFamily};
    src: url('${MuliExtraBoldW2}') format('woff2'),
         url('${MuliExtraBoldW}') format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${fontFamily};
    src: url('${MuliItalicW2}') format('woff2'),
         url('${MuliItalicW}') format('woff');
    font-weight: normal;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: ${fontFamily};
    src: url('${MuliLightW2}') format('woff2'),
         url('${MuliLightW}') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${fontFamily};
    src: url('${MuliW2}') format('woff2'),
         url('${MuliW}') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: ${fontFamily};
    src: url('${MuliBoldW2}') format('woff2'),
         url('${MuliBoldW}') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
`;
