import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  number,
  object,
  text,
  boolean,
  select,
  array,
} from '@storybook/addon-knobs'
import { Button } from 'semantic-ui-react'

storiesOf('basics')
  .add('Button', () => {
    const props = {
      children: text('text', 'button'),
      circular: boolean('circular', false),
    }
    return (
      <Button {...props} />
    )
  })
