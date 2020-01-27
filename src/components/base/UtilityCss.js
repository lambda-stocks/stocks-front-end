import { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

const UtilityCss = createGlobalStyle`
  .no-display {
    display: none
  }

  .active {
    position: relative;
    background-color: ${({
      theme: {
        colors: { colorActive }
      }
    }) => colorActive};

    &::after {
      content: '';
      right: 0;
      top: 0;
      width: 4px;
      height: 100%;
      position: absolute;
      background: ${({
        theme: {
          colors: { colorPrimary }
        }
      }) => lighten(0.7, colorPrimary)};
    }
  }
`

export default UtilityCss
