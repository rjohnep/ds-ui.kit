import React, { memo } from 'react';

import { Wrapper, Row, Title, Description, Property, DefaultValue } from './styled';

const Props = (props) => {
  const { data } = props;

  const tableProps = data.map((item) => (
    <Row key={item.name}>
      <Title required={item.required}>{item.name}</Title>
      <Description>{item.description}</Description>
      <Property>{item.type}</Property>
      <DefaultValue>{!item.required && item.defaultValue}</DefaultValue>
    </Row>
  ));

  return (
    <Wrapper>{tableProps}</Wrapper>
  );
};

export default memo(Props);
