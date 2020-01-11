import { createGlobalStyle } from 'styled-components'

import logoFont from '../../fonts/Potra.otf'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: Potra;
    src: url(${logoFont}) format('opentype');
  }
`

export default Fonts
