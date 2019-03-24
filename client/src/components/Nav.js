import React from 'react'
import { NavLink } from 'react-router-dom'

import { Nav, NavItem } from 'reactstrap';
import Searchbar from '../Searchbar' 
import pic from '../assets/shh-logo-dkrpurple.png'



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
                    <NavLink to='/home'>
                        <img className="logo-main" src={pic} alt="" /> 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact={true} activeClassName='is-active' to='/home'>Shelter Search</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/involved'>Get Involved</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/prevention'>Prevention</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/resources'>Resources</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to='/contact'>Contact</NavLink>
                    {/* <Link to="/contact">Contact</Link> */}
                </NavItem>
                <NavItem> </NavItem>
                
            </Nav>
   
        </div>
    )
}

export default NavList