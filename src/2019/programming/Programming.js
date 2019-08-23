// Import React
import React from 'react'
import { Link } from 'react-router-dom'

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

const Programming = () => {
  const slides = [
    { title: `Kontrak Perkuliahan`, link: `/2019/programming/00` },
    { title: `Algoritma`, link: `/2019/programming/01` },
  ]
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={1} caps lineHeight={1} textColor="secondary">
          Dasar Pemrograman
        </Heading>
      </Slide>
      {slides.map((slide, key) => {
        return (
          <Slide key={key} transition={['zoom']} bgColor={'primary'}>
            <Heading size={1} caps lineHeight={1} textColor="secondary">
              <Link to={slide.link}>{slide.title}</Link>
            </Heading>
          </Slide>
        )
      })}
    </Deck>
  )
}

export default Programming
