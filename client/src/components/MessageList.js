import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import UserMessage from './UserMessage'

class MessageList extends React.Component {
    
    componentWillUpdate() {
        const node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
        //+ 100???
    }
    //this is where my scroll isnt working
    
    componentDidUpdate() {
        // console.log('updatedd')
        if (this.shouldScrollToBottom) {
            const node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight   
        }
        // this.test()
    }
    test = () => {
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
            
            <div className="message-list">
            <div className="chatbot-header">Danger Assessment Chatbot</div>
                {this.test()}
            </div>
        )
    }
}

export default MessageList