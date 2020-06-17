import React from 'react';
import { action } from '@storybook/addon-actions';

import { Wrapper, Title, SourceCode, Doc, Code, Props } from 'utils/Story';

import Icon from './Icon';
import source from './Icon.source.md';

export default {
  title: 'Icon',
  component: Icon
};

export const Default = () => (
  <div>
    <Wrapper>
      <Title>Icon component, default variant</Title>
      <Icon onClick={action('clicked')}>Hello Icon</Icon>
      <SourceCode code={source} />
    </Wrapper>

    <Doc>
      General description about the
      <Code>Icon</Code>
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
