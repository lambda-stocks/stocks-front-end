import React from 'react'
import styled from 'styled-components'

import { Chevron } from '../icons'
import Avatar from './Avatar'

const MenuStyles = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background-color: ${({
      theme: {
        colors: { colorActive }
      }
    }) => colorActive};
  }

  *:not(:last-child) {
    margin-right: 20px;
    line-height: 20px;
  }

  ${({
    theme: {
      breakPoints: { large }
    }
  }) => large`
    *:not(:last-child) {
      margin-right: 10px;
    }
  `}
`

const ProfileMenu = ({ profileImg, name }) => (
  <MenuStyles>
    <Avatar size={4} src={profileImg} />
    <span>{name}</span>
    <Chevron />
  </MenuStyles>
)

export default ProfileMenu
