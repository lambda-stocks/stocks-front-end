import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Logo, AccountView } from '../icons'
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
  background-color: #0e0e30;
  height: 60px;

  .items {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  .logo {
    height: 48px;
  }

  .center-area {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .other-menu {
    display: flex;
    height: 100%;
  }
`

const TopNav = () => (
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
        <ProfileMenu profileImg={placeholderImg} name="Max Harris" />
      </div>
    </div>
  </NavBase>
)

export default TopNav
