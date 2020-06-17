import makeColor from 'themes/utils/makeColor';

export default {
  primary: {
    ...makeColor('#1b262c'),
    contrastText: '#fff'
  },

  secondary: {
    ...makeColor('#0f4c81'),
    contrastText: '#fff'
  },

  danger: {
    ...makeColor('#ed6663'),
    contrastText: '#fff'
  },

  warning: {
    ...makeColor('#ffa372'),
    contrastText: '#2e2f35'
  },

  success: {
    ...makeColor('#228e45'),
    contrastText: '#fff'
  },

  text: {
    light: '#414247',
    main: '#2e2f35',
    dark: '#000'
  },

  black: '#000',
  white: '#fff'
};
