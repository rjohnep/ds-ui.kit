import React from 'react';
import { render } from 'react-testing-library';

import Grid from '../Grid';

describe('<Grid />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Grid />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });

  // Un skip this test to use it
  it.skip('Should render and match the snapshot', () => {
    const { container: { firstChild } } = render(<Grid />);

    expect(firstChild).toMatchSnapshot();
  });
});
