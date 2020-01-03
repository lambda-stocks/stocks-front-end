import styled from 'styled-components'

const WidgetList = styled.ul`
  list-style: none;
  padding: 0;
  overflow-y: auto;
  padding: 0 20px;

  li {
    display: flex;
    margin-bottom: 15px;

    &.reverse {
      flex-direction: row-reverse;
    }
  }
`

export default WidgetList
