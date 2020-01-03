import React from 'react'
import styled, { css } from 'styled-components'

import Column from '../layouts/Column'

const WidgetColum = styled(Column)`
  background-color: #4b4b76;
  margin-right: 10px;
  margin-bottom: 10px;

  ${props =>
    props.large &&
    css`
      height: 367px;
      overflow: hidden;
      overflow-y: auto;
    `};

  ${props =>
    props.small &&
    css`
      height: 230px;
    `};

  @media (max-width: 855px) {
    display: none;
  }
`

const Widget = ({ size, children, large, small }) => {
  return (
    <WidgetColum size={size} large={large} small={small}>
      {children}
    </WidgetColum>
  )
}

export default Widget
