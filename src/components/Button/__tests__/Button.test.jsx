import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import makeRendererWithTheme from 'utils/makeRendererWithTheme';
import { theme as freshaTheme } from 'themes/Fresha';
import { theme as partnersTheme } from 'themes/Partners';

import Button from '../Button';

describe('<Button />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    makeRendererWithTheme(() => <Button>Hola</Button>);

    expect(spy).not.toHaveBeenCalled();
  });

  describe('UI Regression', () => {
    const regressionTests = (...themes) => {
      it('should render correctly primary variant', () => {
        const renderer = makeRendererWithTheme(
          () => <Button variant="primary">Primary</Button>,
          ...themes
        );

        expect(renderer).toMatchSnapshot();
      });

      it('should render correctly secondary variant', () => {
        const renderer = makeRendererWithTheme(
          () => <Button variant="secondary">Secondary</Button>,
          ...themes
        );

        expect(renderer).toMatchSnapshot();
      });

      it('should render correctly danger variant', () => {
        const renderer = makeRendererWithTheme(
          () => <Button variant="danger">Danger</Button>,
          ...themes
        );

        expect(renderer).toMatchSnapshot();
      });

      it('should render correctly small size', () => {
        const renderer = makeRendererWithTheme(
          () => <Button size="small">Small</Button>,
          ...themes
        );

        expect(renderer).toMatchSnapshot();
      });

      it('should render correctly medium size', () => {
        const renderer = makeRendererWithTheme(
          () => <Button size="medium">Medium</Button>,
          ...themes
        );

        expect(renderer).toMatchSnapshot();
      });

      it('should render correctly large size', () => {
        const renderer = makeRendererWithTheme(
          () => <Button size="large">Large</Button>,
          ...themes
        );

        expect(renderer).toMatchSnapshot();
      });

      it('should render correctly shadowed button', () => {
        const renderer = makeRendererWithTheme(
          () => <Button shadowed>Shadowed</Button>,
          ...themes
        );

        expect(renderer).toMatchSnapshot();
      });
    };

    describe('Base theme', () => {
      regressionTests();
    });

    describe('Fresha theme', () => {
      regressionTests(freshaTheme);
    });

    describe('Fresha Mobile theme', () => {
      regressionTests(freshaTheme, freshaTheme.mobile);
    });

    describe('Partners theme', () => {
      regressionTests(partnersTheme);
    });
  });
});
