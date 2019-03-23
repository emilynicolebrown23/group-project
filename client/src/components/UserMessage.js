import React from 'react'

function UserMessage(props) {
    return (
        <div className="userMessage">
            <div className ="userMessage-username">{props.username}</div>
            <div className="userMessage-text">{props.text}</div>
        </div>
    )
}

export default UserMessage