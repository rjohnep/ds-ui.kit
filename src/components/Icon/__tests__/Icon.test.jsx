import React from 'react';
import { render } from 'react-testing-library';

import Icon from '../Icon';

describe('<Icon />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Icon />);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });

  // Un skip this test to use it
  it.skip('Should render and match the snapshot', () => {
    const {
      container: { firstChild }
    } = render(<Icon />);

    expect(firstChild).toMatchSnapshot();
  });
});
