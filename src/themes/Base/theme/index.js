import { fontFamily } from '../fonts';

import palette from './palette';
import button from './button';

export default {
  palette,
  button,
  font: {
    size: '14px',
    lineHeight: '1.4',
    // eslint-disable-next-line max-len
    family: `${fontFamily}, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;`
  },
  elevation: {
    none: 'none',
    small: '0 1px 3px 0 rgba(0, 0, 0, 0.25)',
    medium: '0 2px 3px 0 rgba(0, 0, 0, 0.25)',
    large: '0 2px 5px 0 rgba(0, 0, 0, 0.25)',
    xLarge: '0 5px 5px 0 rgba(0, 0, 0, 0.25)'
  },
  icon: {
    size: {
      small: '16px',
      medium: '24px',
      large: '36px'
    }
  }
};
