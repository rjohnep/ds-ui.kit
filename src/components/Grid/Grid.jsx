import React, { memo } from 'react';

const Grid = (props) => (
  <div>{props.children}</div>
);

export default memo(Grid);
