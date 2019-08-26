// Import React
import React from 'react'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Deck,
  Heading,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
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
    quaternary: '#282828',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

const Programming01 = () => {
  return (
    <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme}>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={1} caps fit lineHeight={1} textColor="secondary">
          Algoritma
        </Heading>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={2} caps lineHeight={1} textColor="secondary">
          Sejarah
        </Heading>
        <List>
          <ListItem>
            Diambil dari nama
            <strong>Abu Ja'far Muhammad Ibnu Musa Al-Khawarizmi</strong>
          </ListItem>
          <ListItem>Dalam buku Al-jabar wa Muqabbala</ListItem>
          <ListItem>Awal dari istilah Aljabar</ListItem>
          <ListItem>Al-Khawarizmi -> Algorism</ListItem>
        </List>
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
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={2} caps lineHeight={1} textColor="secondary">
          Definisi
        </Heading>
        <Text>
          <strong>Algoritma</strong>: urutan langkah-langkah logis penyelesaian
          masalah yang disusun secara sistematis dan logis.
        </Text>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={2} caps lineHeight={1} textColor="secondary">
          Definisi
        </Heading>
        <List>
          <ListItem>
            <strong>Sistematis</strong>: urutan langkah-langkah yang disusun
            harus jelas, memiliki pola tertentu.
          </ListItem>
          <ListItem>
            <strong>Logis</strong>: masuk akal, bisa dibaca dan diterima oleh
            akal
          </ListItem>
          <ListItem>Bisa dinilai benar salahnya</ListItem>
        </List>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={2} caps lineHeight={1} textColor="secondary">
          Penilaian Algoritma
        </Heading>
        <List>
          <ListItem>
            Hasilnya harus benar, sesuai dengan yang diinginkan
          </ListItem>
          <ListItem>Seberapa baik hasil dari algoritma tersebut</ListItem>
          <ListItem>
            Efisiensi algoritma -> waktu dan resource (cpu, memory, dsb)
          </ListItem>
        </List>
      </Slide>
      <Slide transition={['zoom']} bgColor={'secondary'}>
        <Heading size={2} caps fit lineHeight={1} textColor="primary">
          Penilaian Algoritma
        </Heading>
        <BlockQuote>
          <Quote textSize="1em" bold>
            Dimungkinkan antara orang satu dengan yang lain, dari
            <strong>masalah yang sama</strong> akan mendapatkan
            <strong>Algoritma</strong> yang berbeda. Semuanya dianggap benar
            asal hasil yang dikeluarkan sesuai dengan harapan. Namun demikian,
            di antara perbedaan algoritma tersebut, bisa dipilih mana yan lebih{' '}
            <strong>efisien</strong>.
          </Quote>
        </BlockQuote>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={2} fit caps lineHeight={1} textColor="secondary">
          Struktur Dasar Algoritma
        </Heading>
        <List>
          <ListItem>Struktur runtutan / sekuensial</ListItem>
          <Appear>
            <ListItem>
              Digunakan untuk program yang pernyataannya sekuensial atau runtut.
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={2} fit caps lineHeight={1} textColor="secondary">
          Struktur Dasar Algoritma
        </Heading>
        <List>
          <ListItem>Struktur pemilihan</ListItem>
          <Appear>
            <ListItem>
              Digunakan untuk program yang menggunakan pemilihan atau
              penyeleksian kondisi
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={2} fit caps lineHeight={1} textColor="secondary">
          Struktur Dasar Algoritma
        </Heading>
        <List>
          <ListItem>Struktur perulangan</ListItem>
          <Appear>
            <ListItem>
              Digunakan untuk program yang pernyataannya akan dieksekusi
              berulang-ulang.
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={2} fit caps lineHeight={1} textColor="secondary">
          Langkah Membuat Algoritma
        </Heading>
        <List>
          <Appear>
            <ListItem>Pahami masalah</ListItem>
          </Appear>
          <Appear>
            <ListItem>Tentukan kondisi awal -> Data Input</ListItem>
          </Appear>
          <Appear>
            <ListItem>Tentukan kondisi akhir -> Data Output</ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Data pendukung lain yang dibutuhkan pada proses penyelesaian
              masalah (jika ada).
            </ListItem>
          </Appear>
          <Appear>
            <ListItem>
              Tentukan langkah penyelesaian masalah mulai dari kondisi awal,
              hingga bisa tercapai kondisi akhir
            </ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={2} fit caps lineHeight={1} textColor="secondary">
          Langkah Membuat Algoritma
        </Heading>
        Dalam menyusun langkah mungkin melibatkan:
        <List>
          <Appear>
            <ListItem>Urutan/sequence</ListItem>
          </Appear>
          <Appear>
            <ListItem>Pemilihan</ListItem>
          </Appear>
          <Appear>
            <ListItem>Perulangan</ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide transition={['zoom']} bgColor={'primary'}>
        <Heading size={2} caps lineHeight={1} textColor="secondary">
          Contoh
        </Heading>
        <List>
          <ListItem>
            <strong>Masalah</strong>: memasak nasi menggunakan rice cooker
          </ListItem>
          <ListItem>
            <strong>Input</strong>: beras, air
          </ListItem>
          <ListItem>
            <strong>Output</strong>: nasi
          </ListItem>
          <ListItem>
            <strong>Data lain</strong>: rice cooker
          </ListItem>
          <ListItem>
            <strong>Proses</strong>:
          </ListItem>
          <List>
            <ListItem>Cuci beras hingga bersih</ListItem>
            <ListItem>Masukkan beras ke rice cooker</ListItem>
            <ListItem>Tambahkan air</ListItem>
            <ListItem>Nyalakan rice cooker</ListItem>
            <ListItem>Tunggu sampai indikator masak</ListItem>
            <ListItem>Nasi masak</ListItem>
          </List>
        </List>
      </Slide>
      <Slide
        transition={['zoom']}
        bgImage="https://source.unsplash.com/random/800x600/?question"
      >
        <Heading size={2} fit lineHeight={1} textColor="primary">
          Pertanyaan?
        </Heading>
      </Slide>
    </Deck>
  )
}

export default Programming01
