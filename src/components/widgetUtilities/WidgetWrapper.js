import styled from 'styled-components'

const WidgetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1055px) {
    display: none;
  }
`

export default WidgetWrapper
