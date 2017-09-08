import { configure, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import withTheme from './decorators/withTheme'
import withCSS from './decorators/withCSS'
import makeCenteredStories from './decorators/Centered'

addDecorator(withCSS)
addDecorator(withKnobs)
addDecorator(withTheme)
addDecorator(makeCenteredStories)

const req = require.context('./stories', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
