import React from 'react'
import styled from 'styled-components'

import Column from '../layouts/Column'

const WidgetColum = styled(Column)`
  background-color: #4b4b76;
  margin-right: 10px;
  margin-bottom: 10px;
`

const Widget = ({ size, children }) => {
  return <WidgetColum size={size}>{children}</WidgetColum>
}

export default Widget
