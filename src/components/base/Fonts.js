import { createGlobalStyle } from 'styled-components'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: Potra;
    src: ${({
      theme: {
        fonts: { primaryFont }
      }
    }) => `url(${primaryFont}) format('opentype')`};
  }
`

export default Fonts
