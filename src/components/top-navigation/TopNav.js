import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { isEmpty } from 'lodash'

import { Link } from 'react-router-dom'
import { Logo } from '../icons'
import SearchBar from './SearchBar'
import ViewSelector from './ViewSelector'
import OtherLinks from './OtherLinks'
import ProfileMenu from './ProfileMenu'
import placeholderImg from '../../images/dp.png'

const NavBase = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 999;
  background-color: ${({
    theme: {
      colors: { colorPrimary }
    }
  }) => colorPrimary};

  .items {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  .logo {
    height: 48px;
    width: 48px;

    ${({
      theme: {
        breakPoints: { large }
      }
    }) => large`
      margin-right: auto;
    `}
  }

  .center-area {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ${({
      theme: {
        breakPoints: { large }
      }
    }) => large`
      flex-grow: 0;
    `}
  }

  .other-menu {
    display: flex;
    height: 100%;
  }
`

const TopNav = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    let user = localStorage.getItem('user') ? localStorage.getItem('user') : null
    user = JSON.parse(user)
    setUser(user)
  }, [])

  return (
    <NavBase>
      <div className="items">
        <Link to="/" className="logo">
          <Logo />
        </Link>
        <div className="center-area">
          <SearchBar />
          <ViewSelector />
        </div>
        <div className="other-menu">
          <OtherLinks />
          <ProfileMenu
            profileImg={placeholderImg}
            name={!isEmpty(user) ? `${user.firstName} ${user.lastName}` : ''}
          />
        </div>
      </div>
    </NavBase>
  )
}

export default TopNav
