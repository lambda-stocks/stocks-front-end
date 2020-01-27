import { css } from 'styled-components'

const sizes = {
  xlarge: null,
  large: 1055,
  medium: 855,
  small: 485,
  xsmall: null
}

/* ---------------------------------------------------------------------
  Example Usage:
    ${({theme: {breakPoints: { large }}}) => large`CSS_PROPERTIES_GO_HERE`}
------------------------------------------------------------------------ */

const Media = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export default Media
