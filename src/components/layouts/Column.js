import styled from 'styled-components'

export default styled.div`
  position: relative;
  width: ${props => `${(100 * props.size) / 12}%`};
`
