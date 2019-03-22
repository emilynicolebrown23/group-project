import React, { Component } from 'react'
import ContactForm from './ContactForm';
import DangerForm from './DangerForm';
import DangerList from './DangerList';
import { withShelters } from '../context/ShelterProvider'


class Contact extends Component {
    constructor(){
        super()
        this.state ={
            name: '',
            email: '',
            phone: '',
            info: '',
            q1: '',
            q2: ''
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
           info: '',
           q1: ''
       })
       alert("Thank you for your information. You will be contacted within 24hrs")
    }
    render(){
        return (

            <div className="contact-container">
                

                <ContactForm handleSubmit={this.handleSubmit } handleChange={this.handleChange} {...this.state}/>


                <DangerForm/>

                {this.props.dangerResult}
                {/* <DangerList/> */}
            </div>
        )
    }

}

export default withShelters(Contact)