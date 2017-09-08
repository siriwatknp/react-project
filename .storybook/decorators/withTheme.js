import React from 'react'
import { ThemeProvider } from 'glamorous'

export default (story) => {
  return (
    <ThemeProvider theme={{}}>
      {story()}
    </ThemeProvider>
  )
}
