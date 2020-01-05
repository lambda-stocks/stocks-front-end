import React from 'react'
import styled from 'styled-components'
import { AccountView, Chevron } from '../icons'

const ViewStyles = styled.div`
  display: flex;
  margin: 0 50px;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 10px;
    line-height: 20px;
  }

  ${({
    theme: {
      breakPoints: { large }
    }
  }) => large`
    margin-right: 15px;
    margin-left: 0;

    span {
      display: none;
    }
  `}
`

const ViewSelector = () => (
  <ViewStyles>
    <AccountView />
    <span>Custom View</span>
    <Chevron fill="#8A8D94" />
  </ViewStyles>
)

export default ViewSelector
