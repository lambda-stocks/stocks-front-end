import React from 'react'
import styled from 'styled-components'

import { House, Menu, Clock, Union, GearIcon, Account, DoubleChevron } from './icons'
import NavLinks from './links/NavLinks'

const NavIcons = [
  { id: 0, icon: <House />, href: '/' },
  { id: 1, icon: <Menu />, href: '/a' },
  { id: 2, icon: <Clock />, href: '/dashboard' },
  { id: 3, icon: <Account />, href: '/b' },
  { id: 4, icon: <Union />, href: '/c' },
  { id: 5, icon: <GearIcon />, href: '/d' },
  { id: 6, icon: <DoubleChevron />, href: '/e' }
]

const NavContainer = styled.div`
  position: fixed;
  width: 60px;
  height: calc(100vh - 60px);
  top: 60px;
  left: 0;
  overflow-y: auto;
  z-index: 999;
  background-color: ${({
    theme: {
      colors: { colorPrimary }
    }
  }) => colorPrimary};

  a {
    display: block;
    padding: 20px 0;
    margin: 0 auto 35px;
    transition: background 0.3s ease;
    cursor: pointer;

    &:hover {
      background-color: ${({
        theme: {
          colors: { colorActive }
        }
      }) => colorActive};
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

const SideNav = ({ location }) => {
  return (
    <NavContainer>
      <IconContainer>
        {NavIcons.map(({ icon, href, id }, index) => {
          return (
            <div key={`${id}${href}${index}`}>
              <NavLinks href={href} className={location === href ? 'active' : ''}>
                {icon}
              </NavLinks>
              {NavIcons.length - 2 === index && (
                <hr style={{ width: '38px', marginBottom: '35px', color: '#fff' }} />
              )}
            </div>
          )
        })}
      </IconContainer>
    </NavContainer>
  )
}

export default SideNav
