import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styled';

const Icon = (props) => {
  const { glyph, ...restProps } = props;

  return (
    <Wrapper {...restProps}>
      <use xlinkHref={`#${glyph.id}`} />
    </Wrapper>
  );
};

Icon.propTypes = {
  glyph: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf([
    undefined,
    'primary',
    'secondary',
    'danger',
    'warning',
    'success'
  ])
};

Icon.defaultProps = {
  variant: undefined,
  size: 'medium'
};

export default Icon;
