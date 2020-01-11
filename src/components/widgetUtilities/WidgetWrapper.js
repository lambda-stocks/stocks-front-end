import styled from 'styled-components'

const WidgetWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;

  ${({
    theme: {
      breakPoints: { large }
    }
  }) => large`
      display: block;
    `}
`

export default WidgetWrapper
