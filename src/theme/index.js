import Media from './Media'

import {
  colorWhite,
  colorBlack,
  colorPrimary,
  colorPrimaryMed,
  colorPrimaryLight,
  colorActive,
  colorSecondary,
  colorLightGrey,
  colorMedGrey,
  colorPrimaryHover
} from './Colors'

import logoFont from '../fonts/Potra.otf'

const DefaultTheme = {
  breakPoints: Media,
  colors: {
    colorWhite,
    colorBlack,
    colorPrimary,
    colorPrimaryMed,
    colorPrimaryLight,
    colorActive,
    colorSecondary,
    colorLightGrey,
    colorMedGrey,
    colorPrimaryHover
  },
  fonts: {
    logoFont
  }
}

export default DefaultTheme
