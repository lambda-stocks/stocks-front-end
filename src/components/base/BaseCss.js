import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

const BaseCss = createGlobalStyle`
  ${normalize()}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 30px;

    ${({
      theme: {
        colors: { colorWhite }
      }
    }) => `color: ${colorWhite}`};

    ${({
      bgColor,
      theme: {
        colors: { colorWhite, colorPrimaryMed }
      }
    }) => (bgColor ? `background-color: ${colorPrimaryMed}` : `background-color: ${colorWhite}`)};
  }
`

export default BaseCss
