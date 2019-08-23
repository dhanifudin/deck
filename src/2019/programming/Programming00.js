// Import React
import React from 'react'

// Import Spectacle Core tags
import { Deck, Heading, Slide } from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

const Programming00 = () => {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={1} caps lineHeight={1} textColor="secondary">
          Kontrak Perkuliahan
        </Heading>
      </Slide>
    </Deck>
  )
}

export default Programming00
