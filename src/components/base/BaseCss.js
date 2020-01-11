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
    color: #fff;
    ${props => (props.bgColor ? 'background-color: #1f1f54' : 'background-color: #fff')};
  }
`

export default BaseCss
