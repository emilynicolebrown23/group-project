import React from 'react'
// import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap';
import Searchbar from '../Searchbar' 


const NavList = () => {
    return (
        // <div className="nav">
        //     <Link to="/">Shelter Search</Link>
        //     <Link to="/involved">Get Involved</Link>
        //     <Link to="/prevention">Prevention</Link>
        //     <Link to="/resources">Resources</Link>
        //     <Link to="/contact">Contact</Link>
        // </div>
        <div className="nav">
            <Nav>
                <NavItem>
                    <NavLink href="/home">Shelter Search</NavLink>
                    {/* <Link to="/">Shelter Search</Link> */}
                </NavItem>
                <NavItem>
                    <NavLink href="/involved">Get Involved</NavLink>
                    {/* <Link to="/involved">Get Involved</Link> */}
                </NavItem>
                <NavItem>
                    <NavLink href="/prevention">Prevention</NavLink>
                    {/* <Link to="/prevention">Prevention</Link> */}
                </NavItem>
                <NavItem>
                    <NavLink href="/resources">Resources</NavLink>
                    {/* <Link to="/resources">Resources</Link> */}
                </NavItem>
                <NavItem>
                    <NavLink href="/contact">Contact</NavLink>
                    {/* <Link to="/contact">Contact</Link> */}
                </NavItem>
                <NavItem><Searchbar /> </NavItem>
                
            </Nav>
            
        </div>
    )
}

export default NavList