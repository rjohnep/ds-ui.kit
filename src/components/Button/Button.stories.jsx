import React from 'react';
import { action } from '@storybook/addon-actions';

import { Wrapper, Title, SourceCode, Doc, Code, Props } from 'utils/Story';
import arrowRightIcon from 'icons/arrow-right.svg';
import removeIcon from 'icons/remove.svg';
import searchIcon from 'icons/search.svg';
import calendarIcon from 'icons/calendar.svg';

import Button from './Button';
import * as sources from './Button.source';

export default {
  title: 'Button',
  component: Button
};

export const Default = () => (
  <div>
    <Wrapper>
      <Title>Variants</Title>

      <Button variant="primary" onClick={action('clicked')}>
        Primary
      </Button>
      <Button variant="secondary" onClick={action('clicked')}>
        Secondary
      </Button>
      <Button variant="danger" onClick={action('clicked')}>
        Danger
      </Button>
      <Button variant="warning" onClick={action('clicked')}>
        Warning
      </Button>
      <Button variant="success" onClick={action('clicked')}>
        Success
      </Button>

      <SourceCode code={sources.variants} />
    </Wrapper>

    <Wrapper>
      <Title>Sizes</Title>

      <Button size="small" onClick={action('clicked')}>
        Small
      </Button>
      <Button size="medium" onClick={action('clicked')}>
        Medium
      </Button>
      <Button size="large" onClick={action('clicked')}>
        Large
      </Button>

      <SourceCode code={sources.sizes} />
    </Wrapper>

    <Wrapper>
      <Title>With Icon</Title>

      <Button icon={arrowRightIcon} onClick={action('clicked')}>
        Arrow Icon
      </Button>
      <Button variant="warning" icon={calendarIcon} onClick={action('clicked')}>
        Choose date
      </Button>
      <Button variant="danger" icon={removeIcon} onClick={action('clicked')}>
        Remove Icon
      </Button>
      <Button variant="secondary" icon={searchIcon} onClick={action('clicked')}>
        Search Icon
      </Button>

      <SourceCode code={sources.icon} />
    </Wrapper>

    <Wrapper>
      <Title>Reverse</Title>

      <Button reverse icon={arrowRightIcon} onClick={action('clicked')}>
        Arrow Icon
      </Button>
      <Button
        variant="warning"
        reverse
        icon={calendarIcon}
        onClick={action('clicked')}
      >
        Choose date
      </Button>
      <Button
        variant="danger"
        reverse
        icon={removeIcon}
        onClick={action('clicked')}
      >
        Remove Icon
      </Button>
      <Button
        variant="secondary"
        reverse
        icon={searchIcon}
        onClick={action('clicked')}
      >
        Search Icon
      </Button>

      <SourceCode code={sources.reverse} />
    </Wrapper>

    <Wrapper>
      <Title>Shadowed</Title>

      <Button shadowed onClick={action('clicked')}>
        Primary
      </Button>
      <Button shadowed variant="secondary" onClick={action('clicked')}>
        Secondary
      </Button>
      <Button shadowed variant="danger" onClick={action('clicked')}>
        Danger
      </Button>
      <Button shadowed variant="warning" onClick={action('clicked')}>
        Warning
      </Button>

      <SourceCode code={sources.shadowed} />
    </Wrapper>

    <Doc>
      <Code>Button</Code>
      is used for anything that looks like a button on the screen.
      <br />
      If an
      <Code>href</Code>
      is provided, it will be rendered in the DOM with
      <Code>{'<a />'}</Code>
      .
      <br />
      An
      <Code>Anchor</Code>
      component should be used for inline anchors within textual contexts.
    </Doc>

    <Props
      data={[
        {
          name: 'variant',
          description: 'The variant to use.',
          type: 'primary | secondary | danger | warning',
          defaultValue: 'primary'
        },
        {
          name: 'onClick',
          description:
            // eslint-disable-next-line max-len
            'Click handler. Not setting this property and not specifying a href causes the Button to be disabled.',
          type: '() => {}',
          defaultValue: '-'
        },
        {
          name: 'href',
          description:
            'If specified, the button will behave like an anchor tag.',
          type: 'string',
          defaultValue: '-'
        },
        {
          name: 'icon',
          description: 'Icon symbol id to place in the button.',
          type: 'string',
          defaultValue: '-'
        },
        {
          name: 'size',
          description:
            // eslint-disable-next-line max-len
            'The possible sizes of Button, that impacts the overall Button padding, border radius, text size and line height. "size" will not impact any icon related sizing.',
          type: 'small | medium | large',
          defaultValue: 'medium'
        },
        {
          name: 'shadowed',
          description: 'Show the shadow around the button.',
          type: 'boolean',
          defaultValue: 'false'
        }
      ]}
    />
  </div>
);
