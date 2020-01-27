import React from 'react'
import styled, { css } from 'styled-components'

import Column from '../layouts/Column'

const WidgetColum = styled(Column)`
  margin-right: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  overflow-y: auto;
  max-height: 367px;
  padding: 5px 0;
  background-color: ${({
    theme: {
      colors: { colorPrimaryLight }
    }
  }) => colorPrimaryLight};

  /* TODO: remove large and small prop once app is receiving data */
  ${props =>
    props.large &&
    css`
      height: 367px;
    `}

  ${props =>
    props.small &&
    css`
      height: 230px;
    `}

    ${({
      theme: {
        breakPoints: { large }
      }
    }) => large`
      width: 100%;
    `}
`

const Widget = ({ size, children, large, small }) => {
  return (
    <WidgetColum size={size} large={large} small={small}>
      {children}
    </WidgetColum>
  )
}

export default Widget
