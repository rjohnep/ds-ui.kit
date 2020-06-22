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

// hook
const useWindowSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};

const ThemeDecorator = storyFn => {
  const [currentTheme, setCurrentTheme] = useState(baseTheme);
  const [currentThemeId, setCurrentThemeId] = useState('base');
  const windowSize = useWindowSize();

  useEffect(() => {
    const isMobile = windowSize.width < 1024;
    const nextTheme = themes[currentThemeId];
    const newTheme = currentThemeId === 'base' ? baseTheme : merge.all([baseTheme, nextTheme, isMobile && nextTheme.mobile || {}]);

    setCurrentTheme(newTheme);
  }, [currentThemeId, windowSize.width]);

  return (
    <ThemeProvider theme={currentTheme}>
      <ChooseTheme onChoose={setCurrentThemeId} list={Object.keys(themes)} current={currentThemeId} />
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  );
};

export default ThemeDecorator;