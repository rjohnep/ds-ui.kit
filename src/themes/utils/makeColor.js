import { lighten, darken } from 'polished';

export default (main) => ({
  light: lighten(0.2, main),
  main,
  dark: darken(0.2, main)
});
