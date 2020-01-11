import React from 'react'
import styled from 'styled-components'

import { Bell, ThreeDots } from '../icons'

const LinkStyles = styled.div`
  display: flex;
  border: ${({
    theme: {
      colors: { colorLightGrey }
    }
  }) => `1px solid ${colorLightGrey}`};
  border-top: none;
  border-bottom: none;
  align-items: stretch;
  height: 100%;
`

const MenuItem = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background-color: ${({
      theme: {
        colors: { colorActive }
      }
    }) => colorActive};
  }

  &:not(:last-child) {
    border-right: ${({
      theme: {
        colors: { colorLightGrey }
      }
    }) => `1px solid ${colorLightGrey}`};
  }
`

const OtherLinks = () => (
  <LinkStyles>
    <MenuItem>
      <Bell />
    </MenuItem>
    <MenuItem>
      <ThreeDots />
    </MenuItem>
  </LinkStyles>
)

export default OtherLinks
