import React from 'react'
import styled from 'styled-components'

import { House, Menu, Clock, Union, GearIcon, Account, DoubleChevron } from './icons'
import NavLinks from './links/NavLinks'

const NavContainer = styled.div`
  position: fixed;
  width: 60px;
  height: calc(100vh - 60px);
  top: 60px;
  left: 0;
  background-color: #0e0e30;
  overflow-y: auto;

  a {
    display: block;
    padding: 20px 0;
    margin: 0 auto 35px;

    &:hover {
      background-color: #2358db;
    }
  }
`

const IconContainer = styled.div`
  height: 100%;
  margin: 30px auto;

  svg {
    display: block;
    margin: 0 auto;
  }
`

const TopNav = () => {
  return (
    <NavContainer>
      <IconContainer>
        <NavLinks to="">
          <House />
        </NavLinks>
        <NavLinks to="">
          <Menu />
        </NavLinks>
        <NavLinks to="">
          <Clock />
        </NavLinks>
        <NavLinks to="">
          <Account />
        </NavLinks>
        <NavLinks to="">
          <Union />
        </NavLinks>
        <NavLinks to="">
          <GearIcon />
        </NavLinks>

        <hr style={{ width: '38px', marginBottom: '35px' }} />

        <NavLinks to="">
          <DoubleChevron />
        </NavLinks>
      </IconContainer>
    </NavContainer>
  )
}

export default TopNav
