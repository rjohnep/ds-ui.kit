import React from 'react';
import { action } from '@storybook/addon-actions';

import { Wrapper, Title, SourceCode, Doc, Code, Props } from 'utils/Story';

import Grid from './Grid';
import source from './Grid.source.md';

export default {
  title: 'Grid',
  component: Grid
};

export const Default = () => (
  <div>
    <Wrapper>
      <Title>Grid component</Title>
      <Grid onClick={action('clicked')}>Hello Grid</Grid>
      <SourceCode code={source} />
    </Wrapper>

    <Doc>
      Short/General description about the
      <Code>Grid</Code>
      component.
    </Doc>

    <Props
      data={[
        {
          name: 'label',
          description: 'label description',
          type: 'string',
          defaultValue: 'undefined'
        }
      ]}
    />
  </div>
);
