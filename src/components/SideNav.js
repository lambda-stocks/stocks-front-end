import React from 'react'
import styled from 'styled-components'

import { House, Menu, Clock, Union, GearIcon, Account, DoubleChevron } from './icons'
import NavLinks from './links/NavLinks'

const NavIcons = [
  { icon: <House />, href: '/' },
  { icon: <Menu />, href: '/' },
  { icon: <Clock />, href: '/' },
  { icon: <Account />, href: '/' },
  { icon: <Union />, href: '/' },
  { icon: <GearIcon />, href: '/' },
  { icon: <DoubleChevron />, href: '/' }
]

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
        {NavIcons.map(({ icon, href }, index) => (
          <>
            <NavLinks to={href} key={href}>
              {icon}
            </NavLinks>
            {NavIcons.length - 2 === index && (
              <hr style={{ width: '38px', marginBottom: '35px', color: '#fff' }} />
            )}
          </>
        ))}
      </IconContainer>
    </NavContainer>
  )
}

export default TopNav
