import React from 'react'
import styled from 'styled-components'

import { Bell, ThreeDots } from '../icons'

const LinkStyles = styled.div`
  display: flex;
  border-left: 1px solid #dee2ec;
  border-right: 1px solid #dee2ec;
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
    background-color: #2358db;
  }

  &:not(:last-child) {
    border-right: 1px solid #dee2ec;
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
