import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({ children, href, className }) => {
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}

NavLinks.defaultProps = {
  href: '/'
}

export default NavLinks
