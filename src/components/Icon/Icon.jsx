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
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Icon.defaultProps = {
  size: 'medium'
};

export default Icon;
