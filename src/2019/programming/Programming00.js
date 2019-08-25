// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Table,
  TableHeader,
  TableHeaderItem,
  TableBody,
  TableRow,
  TableItem,
} from 'spectacle'

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
        <Heading size={1} caps fit lineHeight={1} textColor="secondary">
          Kontrak Perkuliahan
        </Heading>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderItem>Minggu</TableHeaderItem>
              <TableHeaderItem>Pokok Bahasan</TableHeaderItem>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableItem>1</TableItem>
              <TableItem>Dasar Pemrograman</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>2</TableItem>
              <TableItem>Studi Kasus</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>3</TableItem>
              <TableItem>Tipe data, Variabel, Input-Output, Sequence</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>4</TableItem>
              <TableItem>Kuis 1</TableItem>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderItem>Minggu</TableHeaderItem>
              <TableHeaderItem>Pokok Bahasan</TableHeaderItem>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableItem>5</TableItem>
              <TableItem>Pemilihan 1</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>6</TableItem>
              <TableItem>Pemilihan 2</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>7</TableItem>
              <TableItem>Mini Project</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>8</TableItem>
              <TableItem>UTS</TableItem>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderItem>Minggu</TableHeaderItem>
              <TableHeaderItem>Pokok Bahasan</TableHeaderItem>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableItem>9</TableItem>
              <TableItem>Perulangan 2</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>10</TableItem>
              <TableItem>Perulangan 1</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>11</TableItem>
              <TableItem>Array 1</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>12</TableItem>
              <TableItem>Array 2</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>13</TableItem>
              <TableItem>Kuis 2</TableItem>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderItem>Minggu</TableHeaderItem>
              <TableHeaderItem>Pokok Bahasan</TableHeaderItem>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableItem>14</TableItem>
              <TableItem>Fungsi 1</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>15</TableItem>
              <TableItem>Fungsi 2</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>16</TableItem>
              <TableItem>Project Akhir</TableItem>
            </TableRow>
            <TableRow>
              <TableItem>17</TableItem>
              <TableItem>UAS</TableItem>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>
    </Deck>
  )
}

export default Programming00
