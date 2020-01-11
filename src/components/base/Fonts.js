import { createGlobalStyle } from 'styled-components'

import Potra from '../../fonts/Potra.otf'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: Potra;
    src: url(${Potra}) format('opentype');
  }
`

export default Fonts
