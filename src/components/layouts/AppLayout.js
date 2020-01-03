import React from 'react'
import styled from 'styled-components'

const AppWrapper = styled.div`
  padding: 55px 40px 0px 62px;
`

const AppLayout = ({ children }) => <AppWrapper>{children}</AppWrapper>

export default AppLayout
