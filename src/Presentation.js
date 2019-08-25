// Import React
import React from 'react'
import { Link } from 'react-router-dom'

// Import Spectacle Core tags
import { Deck, Slide, Heading, List, ListItem } from 'spectacle'

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

const Presentation = () => {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={1} caps fit lineHeight={1} textColor="secondary">
          Kuliah Semester
        </Heading>
        <Heading size={2} caps fit lineHeight={1} textColor="secondary">
          Gasal 2019 / 2020
        </Heading>
        <List>
          <ListItem>
            <Link to={`2019/mobile`}>Pemrograman Mobile</Link>
          </ListItem>
          <ListItem>
            <Link to={`2019/programming`}>Dasar Pemrograman</Link>
          </ListItem>
        </List>
      </Slide>
    </Deck>
  )
}

export default Presentation
