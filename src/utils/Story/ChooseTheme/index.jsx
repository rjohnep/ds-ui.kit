import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Theme } from './styled';

const ChooseTheme = (props) => (
  <Wrapper>
    Choose a theme:
    {props.list.map((item) => (
      <Theme
        key={item}
        active={item === props.current}
        onClick={() => props.onChoose(item)}
      >
        {item}
      </Theme>
    ))}
  </Wrapper>
);

ChooseTheme.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  current: PropTypes.string.isRequired,
  onChoose: PropTypes.func.isRequired
};

export default ChooseTheme;
