import React from 'react'
import { Link } from 'react-router-dom'
import Password from './Password'

const Landing = () => {
    return (
        <div className="landing-container">
        <h1 className="landing-header">From your garden...</h1>
                <div className="background"></div>
        <h2 className="landing-footer">                                 ...to your table </h2>

            <div className="button-container">
                <h1>Username</h1>
                <input className="password"></input>
                <h1>Password</h1>
                <input className="password"></input>
                <Link to="/home">ENTER</Link>
                
                
            </div>
            {/* <Password /> */}
        </div>
    )
}

export default Landing