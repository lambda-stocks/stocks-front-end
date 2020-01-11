import styled from 'styled-components'
import { darken } from 'polished'

const WidgetList = styled.ul`
  list-style: none;
  padding: 0;
  overflow-y: auto;
  padding: 0 20px;

  li {
    display: flex;
    border-bottom: ${({
      theme: {
        colors: { colorWhite }
      }
    }) => `1px solid ${darken(0.3, colorWhite)}`};

    &:first-child {
      border-top: ${({
        theme: {
          colors: { colorWhite }
        }
      }) => `1px solid ${darken(0.3, colorWhite)}`};
    }

    &.reverse {
      flex-direction: row-reverse;
    }

    a {
      transition: background-color 0.3s ease;
      padding: 10px 20px;
      color: ${({
        theme: {
          colors: { colorWhite }
        }
      }) => colorWhite};

      &:hover {
        background-color: ${({
          theme: {
            colors: { colorPrimaryHover }
          }
        }) => colorPrimaryHover};
      }
    }
  }
`

export default WidgetList
