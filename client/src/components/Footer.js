import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

const Footer = () => {
  return (
    <div className="footer">
        <Nav>
          <NavItem>
            <NavLink href="/">Shelter Search</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/involved">Get Involved</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/prevention">Prevention</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/resources">Resources</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
            {/* <Link to="/contact">Contact</Link> */}
          </NavItem>
        </Nav>
    </div>
  )
}

export default Footer