import React from 'react'
import ReactDOM from 'react-dom'
import Chatkit from '@pusher/chatkit-client'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import '../style.css'

import { tokenUrl, instanceLocator } from '../config'
//overflow y scroll in css

class Chatbot extends React.Component {
    
    constructor() {
        super()
        // this.node = 'app'
        this.state = {
            roomId: '19394103',
            messages: [
                {
                id: 8329749823,
                senderId: 'SSHbot',
                text: 'Welcome to our Danger Assessment Chat. Press ENTER.'
                },
                {
                    id: 8329749823,
                    senderId: 'SSHbot',
                    text: 'Answer yes or no to each of these questions.'
                },
                {
                    id: 8329749823,
                    senderId: 'SSHbot',
                    text: 'We will ascess your level of danger. Press ENTER.'
                },
                {
                    id: 8329749823,
                    senderId: 'SSHbot',
                    text: '1. Has your partner ever threatened violence?'
                },
                {
                id: 8329749823,
                senderId: 'SSHbot',
                text: '2. Has your partner ever taken your cell phone?'
                },
                {
                id: 8329749825,
                senderId: 'SSHuser',
                text: '3. Do you feel anxious or nervous when you are around your partner?'
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '4.Do you watch what you are doing in order to avoid making your partner angry or upset?' 
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '5. Do you feel obligated or coerced into having sex with your partner?' 
                }, 
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '6. Are you afraid of voicing a different opinion than your partner?' 
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '7. Does your partner criticize you or embarrass you in front of others?' 
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '8. Does your partner check up on what you have been doing, and believe your answers?' 
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '9. Is your partner jealous, such as accusing you of having affairs?' 
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: '10. Does your partner tell you that they will stop beating you when you start behaving?' 
                },
                {
                    id: 8329749825,
                    senderId: 'SSHbot',
                    text: 'Thank you for taking our Danger Assessment Quiz. Your danger score is {16} HIGH' 
                },
                
            ],
            userMessages: [
                {
                    id: '',
                    senderId: 'user',
                    text: ''
                }
            ],
            currentUser: {}
        }

    } 
    
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'SSHbot',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.getRooms()
        })
        .catch(err => console.log('error on connecting: ', err))
    }

    // componentWillUpdate() {
    //     const node = ReactDOM.findDOMNode(this.node)
    //     this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    //     //+ 100???
    // }
    
    // componentDidUpdate() {
    //     // console.log('updatedd')
    //     if (this.shouldScrollToBottom) {
    //         const node = ReactDOM.findDOMNode(this)
    //         node.scrollTop = node.scrollHeight   
    //     }
    //     this.getMessages()
    //     //the components did & will mount are where my scroll isnt working
    // }
 
    sendMessage = (text) => {
        console.log(text)
        let userInputMsg = {
            id: 8329749826,
            senderId: 'User',
            text: text
            }
            
        this.setState(prevState => ({
            userMessages: [
                ...prevState.userMessages, userInputMsg
            ]
        }))
    }

    
    render() {
        console.log(this.state.roomId)
        return (
            <div className="app">
                <MessageList 
                    roomId={this.state.roomId}
                    messages={this.state.messages} 
                    userMessages={this.state.userMessages}
                    />
                <SendMessageForm
                    disabled={!this.state.roomId}
                    sendMessage={this.sendMessage} />
            </div>
        );
    }
}

export default Chatbot