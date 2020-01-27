import { createGlobalStyle } from 'styled-components'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: Potra;
    src: ${({
      theme: {
        fonts: { logoFont }
      }
    }) => `url(${logoFont}) format('opentype')`};
  }
`

export default Fonts
