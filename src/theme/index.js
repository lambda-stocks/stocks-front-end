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

import { fontLogo } from './Fonts'

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
    fontLogo
  }
}

export default DefaultTheme
