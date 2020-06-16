import React from 'react';
import { action } from '@storybook/addon-actions';

import { Wrapper, Title, SourceCode, Doc, Code, Props } from 'utils/Story';

import Button from './Button';
import source from './Button.source.md';

export default {
  title: 'Button',
  component: Button
};

export const Default = () => (
  <div>
    <Wrapper>
      <Title>Button component, default variant</Title>
      <Button onClick={action('clicked')}>Hello Button</Button>
      <SourceCode code={source} />
    </Wrapper>

    <Doc>
      General description about the
      <Code>Button</Code>
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