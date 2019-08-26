// Import React
import React from 'react'

// Import Spectacle Core tags
import { Deck, Slide, Heading } from 'spectacle'

import Typist from 'react-typist'
import Terminal from 'spectacle-terminal'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Require CSS
require('normalize.css')

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#282828',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

const About = () => {
  const cursor = {
    show: false,
    blink: true,
    element: '|',
    hideWhenDone: false,
    hideWhenDoneDelay: 1000,
  }
  const about = `
  {
    "name": "Dian Hanifudin Subhi",
    "email": "dhanifudin@polinema.ac.id",
    "phone": "082230743546"
  }
  `
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={1} caps fit lineHeight={1} textColor="secondary">
          About Me
        </Heading>
        <Terminal
          title={'1. dhanifudin@codebook:~'}
          output={[<Typist cursor={cursor}>cat about.json</Typist>, about]}
        />
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <iframe
          title="Why Algorithms called algorithms"
          width="600"
          height="400"
          src="https://www.youtube.com/embed/oRkNaF0QvnI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Slide>
    </Deck>
  )
}

export default About
