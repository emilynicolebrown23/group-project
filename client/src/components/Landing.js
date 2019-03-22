import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div className="landing-container">
        <h1>From your garden...</h1>
                <div className="background"></div>
        <h2>...to your table </h2>


            <Link to="/home">Enter</Link>
        </div>
    )
}

export default Landing