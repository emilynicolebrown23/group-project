import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import UserMessage from './UserMessage'

class MessageList extends React.Component {

    constructor(){
        super()
        this.node = null
    }

    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this.node)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
        //+ 100???
    }
    
    componentDidUpdate() {
        // console.log('updatedd')
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight   
        }
        this.getMessages()
        //the components did & will mount are where my scroll isnt working
    }
    getMessages = () => {
        const dataArr = []
        console.log(this.props.userMessages.length + "hi")
        for(let i = 0; i < this.props.userMessages.length; i++) {
            console.log('i is' +i)
            if (this.props.userMessages.length){
                if(this.props.userMessages.length > 13 ){
                    // retun goodby
                } else {
                dataArr.push(<div>
                <UserMessage key={this.props.userMessages[i].id} username={this.props.userMessages[i].senderID} text={this.props.userMessages[i].text} />
                <Message key={this.props.messages[i].id} username={this.props.messages[i].senderId} text={this.props.messages[i].text} /> 
                        </div>
                )
                }
            } 
           
    }
    return dataArr
}

    render() {
        return (
            
            <div className="message-list" ref={div => this.node = div}>
            <div className="chatbot-header">Danger Assessment Chatbot</div>
                {this.getMessages()}
            </div>
        )
    }
}

export default MessageList