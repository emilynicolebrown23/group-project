import React, { Component } from 'react'
import ContactForm from './ContactForm';
import Footer from './Footer'
import pic from '../assets/carousel-pics_0000.jpg'

class Contact extends Component {
    constructor(){
        super()
        this.state ={
            name: '',
            email: '',
            phone: '',
            text: ''
        }
    }

    handleChange = e => {
        const value = e.target.value
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = e => {
       e.preventDefault()
       this.setState({
           name: '',
           email: '',
           phone: '',
           text: ''
       })
       alert("Thank you for your information. You will be contacted within 24hrs")
    }
    render(){
        return (

            <div className="contact-container">
                <div className="header-resources">
                    <img className="resources-img" src={pic} alt="" />
                </div>
                <ContactForm handleSubmit={this.handleSubmit } handleChange={this.handleChange} {...this.state}/>
            < Footer/>
            </div>
        )
    }

}

export default Contact