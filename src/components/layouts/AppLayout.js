import React from 'react'
import styled from 'styled-components'

const AppWrapper = styled.div`
  padding: 55px 40px 0px;

  ${({
    theme: {
      breakPoints: { small }
    }
  }) => small`
    padding-right: 20px;
    padding-left: 20px;
  `}
`

const AppLayout = ({ children }) => <AppWrapper>{children}</AppWrapper>

export default AppLayout
