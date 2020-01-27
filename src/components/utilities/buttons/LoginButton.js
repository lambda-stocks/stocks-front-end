import styled from 'styled-components'
import { lighten } from 'polished'

const LoginButton = styled.button`
  width: 100%;
  height: 51px;
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 15px;
  background-color: ${({
    theme: {
      colors: { colorPrimaryLight }
    }
  }) => colorPrimaryLight};

  &:hover {
    background-color: ${({
      theme: {
        colors: { colorPrimaryLight }
      }
    }) => `${lighten(0.2, colorPrimaryLight)}`};
  }
`

export default LoginButton
