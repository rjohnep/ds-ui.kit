import makeColor from 'themes/utils/makeColor';

export default {
  primary: {
    ...makeColor('#85a392'),
    contrastText: '#fff'
  },

  secondary: {
    ...makeColor('#f5b971'),
    contrastText: '#fff'
  },

  warning: {
    ...makeColor('#fdd998'),
    contrastText: '#2e2f35'
  }
};
