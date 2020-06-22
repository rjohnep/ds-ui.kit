import React from 'react';

import { Wrapper, StoryTitle, SourceCode, Doc, Code, Props } from 'utils/Story';

import calendarIcon from 'icons/calendar.svg';
import removeIcon from 'icons/remove.svg';

import Icon from './Icon';
import source from './Icon.source.md';

export default {
  title: 'Icon',
  component: Icon
};

export const Default = () => (
  <div>
    <Wrapper>
      <StoryTitle>Colors</StoryTitle>

      <Icon variant="primary" glyph={calendarIcon} />
      <Icon variant="secondary" glyph={calendarIcon} />
      <Icon variant="danger" glyph={calendarIcon} />
      <Icon variant="warning" glyph={calendarIcon} />
      <Icon variant="success" glyph={calendarIcon} />

      <SourceCode code={source} />
    </Wrapper>

    <Wrapper>
      <StoryTitle>Sizes</StoryTitle>

      <Icon size="small" glyph={removeIcon} />
      <Icon size="medium" glyph={removeIcon} />
      <Icon size="large" glyph={removeIcon} />

      <SourceCode code={source} />
    </Wrapper>

    <Doc>
      <Code>Icon</Code> provides support SVG in the sprite way, via
      <Code>svg-sprite-loader</Code>
    </Doc>

    <Props
      data={[
        {
          name: 'variant',
          description:
            'Set the chosen variant with color schema. By default fill is "currentColor"',
          type: 'string',
          defaultValue: 'currentColor'
        },
        {
          name: 'size',
          description: 'The possible sizes of Icon.',
          type: 'small | medium | large',
          defaultValue: 'medium'
        }
      ]}
    />
  </div>
);
