import { createGlobalStyle } from 'styled-components'

const UtilityCss = createGlobalStyle`
  .no-display {
    display: none
  }

  .active {
    position: relative;
    background-color: #2358db;

    &::after {
      content: '';
      right: 0;
      top: 0;
      width: 4px;
      height: 100%;
      position: absolute;
      background: #7FA6FD;
    }
  }
`

export default UtilityCss
