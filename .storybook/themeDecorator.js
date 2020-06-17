import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import merge from 'deepmerge';

import { theme as baseTheme, GlobalStyle } from 'themes/Base';
import { theme as freshaTheme } from 'themes/Fresha';
import { theme as partnersTheme } from 'themes/Partners';
import { ChooseTheme } from 'utils/Story';

const themes = {
  base: baseTheme,
  fresha: freshaTheme,
  partners: partnersTheme,
};

const ThemeDecorator = storyFn => {
  const [currentTheme, setCurrentTheme] = useState(baseTheme);
  const [currentThemeId, setCurrentThemeId] = useState('base');

  useEffect(() => {
    const newTheme = currentThemeId === 'base' ? baseTheme : merge(baseTheme, themes[currentThemeId]);
    setCurrentTheme(newTheme);
  }, [currentThemeId]);

  return (
    <ThemeProvider theme={currentTheme}>
      <ChooseTheme onChoose={setCurrentThemeId} list={Object.keys(themes)} current={currentThemeId} />
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  );
};

export default ThemeDecorator;