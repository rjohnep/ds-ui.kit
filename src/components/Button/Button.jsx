import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Icon } from './styled';

const Button = (props) => {
  const { children, icon, reverse, ...restProps } = props;

  return (
    <Wrapper {...restProps} reverse={reverse}>
      {icon && <Icon glyph={icon} reverse={reverse} />}
      {children}
    </Wrapper>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'warning']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.shape({
    id: PropTypes.string.isRequired
  }),
  reverse: PropTypes.bool,
  shadowed: PropTypes.bool
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  reverse: false,
  icon: undefined,
  shadowed: false
};

export default memo(Button);
