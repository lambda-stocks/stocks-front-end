import React from 'react'
import styled from 'styled-components'

const AppWrapper = styled.div`
  padding: 55px 40px 0px;

  @media (max-width: 485px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`

const AppLayout = ({ children }) => <AppWrapper>{children}</AppWrapper>

export default AppLayout
