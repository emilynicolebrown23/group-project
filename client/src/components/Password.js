import React, { Component } from 'react'
import { TimelineLite } from 'gsap'



class Password extends Component {
    constructor(){
        super()
        this.state = {
            modalToggle: false
        }
        this.modalElement = null
        this.tl = new TimelineLite({paused: true})
    }

    toggleModal = () => {
        console.log(this.modalElement)
        const { modalToggle } = this.state
        if(!modalToggle){
            this.tl
                .to(this.modalElement, 0.3, {autoAlpha: 1})
                .to(this.modalElement, 0.5, {top: 50, scale: 1}, "-=0.3")
                .play()
                console.log("hi")
        } else {
            this.tl
                .to(this.modalElement, 0.3, {autoAlpha: 0})
                .to(this.modalElement, 0.5, {top: 0, scale: 0.75}, "-=0.3")
                .play()
                console.log("bye")
        }
        this.setState(prevState =>({ modalToggle: !prevState.modalToggle}))
    }


    render(){
        
        return (
            <div>
                <div>
                    <button onClick={this.toggleModal}>Enter Password</button>
                </div>
                <div
                    ref={div => this.modalElement = div}
                    className="modal">
                        <input type="text"/>
                    <button onClick={this.toggleModal}>Log In</button>
                </div>
            </div>
        )
    }

}

export default Password