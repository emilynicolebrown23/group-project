import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="landing-container">
        <h1 className="landing-header">From your garden...</h1>
                <div className="background"></div>
        <h2 className="landing-footer">                                 ...to your table </h2>

            <div className="button-container">
                <Link to="/home">ENTER SITE</Link>
            </div>
            
        </div>
    )
}

export default Landing