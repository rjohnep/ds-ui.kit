import makeColor from 'themes/utils/makeColor';

export default {
  primary: {
    ...makeColor('#654062'),
    contrastText: '#fff'
  },

  secondary: {
    ...makeColor('#ff9c71'),
    contrastText: '#fff'
  },

  warning: {
    ...makeColor('#fbd46d'),
    contrastText: '#2e2f35'
  }
};
