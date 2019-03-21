import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from '../Searchbar';


const Nav = () => {
    return (
        <div className="nav">
            <Link to="/">Shelter Search</Link>
            <Link to="/involved">Get Involved</Link>
            <Link to="/prevention">Prevention</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contact">Contact</Link>
            <Searchbar/>
        </div>
    )
}

export default Nav