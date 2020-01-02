import styled from 'styled-components'

const Img = styled.img`
  display: block;
  width: ${props => props.size * 10}px;
  height: ${props => props.size * 10}px;
  border-radius: 50%;
`

export default Img
