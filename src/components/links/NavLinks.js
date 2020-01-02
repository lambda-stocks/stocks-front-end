import React, { Children } from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({ children, href }) => {
  return (
    <Link to={href} style={{ cursor: 'pointer' }}>
      {children}
    </Link>
  )
}

NavLinks.defaultProps = {
  href: '/'
}

export default NavLinks
