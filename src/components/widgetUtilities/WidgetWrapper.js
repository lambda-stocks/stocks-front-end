import styled from 'styled-components'

const WidgetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;

  @media (max-width: 1055px) {
    display: block;
  }
`

export default WidgetWrapper
