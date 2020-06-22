import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import merge from 'deepmerge';

import { theme as baseTheme, GlobalStyle } from 'themes/Base';

export const makeRendererWithTheme = (component, ...themes) => {
  const theme = merge.all([baseTheme, ...themes]);

  const { container } = render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {component()}
    </ThemeProvider>
  );

  return container;
};

export default makeRendererWithTheme;
