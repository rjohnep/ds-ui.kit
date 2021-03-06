import React, { useState } from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';

import {
  Wrapper,
  ButtonsWrapper,
  CopyButton,
  SourceButton,
  Syntax
} from './styled';

const SourceCode = (props) => {
  const [active, setActive] = useState(false);

  const handleCopy = () => copy(props.code);
  const handleSource = () => setActive(!active);

  return (
    <Wrapper>
      <ButtonsWrapper>
        <CopyButton onClick={handleCopy}>copy</CopyButton>
        <SourceButton active={active} onClick={handleSource}>
          source
        </SourceButton>
      </ButtonsWrapper>
      {active && <Syntax language="jsx">{props.code}</Syntax>}
    </Wrapper>
  );
};

SourceCode.propTypes = {
  code: PropTypes.string.isRequired
};

export default SourceCode;
