import React, { memo } from 'react';

const Button = (props) => (
  <div>{props.children}</div>
);

export default memo(Button);
