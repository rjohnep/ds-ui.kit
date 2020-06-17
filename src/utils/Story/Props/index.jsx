import React, { memo, Fragment } from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  Row,
  Title,
  Description,
  Property,
  DefaultValue
} from './styled';

const Props = (props) => {
  const { data } = props;

  const tableProps = data.map((item) => (
    <Fragment key={item.name}>
      <Title required={item.required}>{item.name}</Title>
      <Row>
        <Description>{item.description}</Description>
        <Property>{item.type}</Property>
        <DefaultValue>{!item.required && item.defaultValue}</DefaultValue>
      </Row>
    </Fragment>
  ));

  return <Wrapper>{tableProps}</Wrapper>;
};

Props.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      required: PropTypes.bool,
      description: PropTypes.string,
      type: PropTypes.string,
      defaultValue: PropTypes.string
    })
  ).isRequired
};

export default memo(Props);
