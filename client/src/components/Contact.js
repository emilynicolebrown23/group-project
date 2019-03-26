import React, { Component } from 'react'
import ContactForm from './ContactForm';
import DangerForm from './DangerForm';
import { withShelters } from '../context/ShelterProvider'
import { Container, Row, Col } from 'reactstrap';
import Footer from './Footer'
import pic from '../assets/header_contact.jpg'


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
        console.log(this.props.dangerLevel)
        return (

            <div className="contact-container">
                <div className="header-resources">
                    <img className="resources-img" src={pic} alt="" />
                </div>
                <Container className="contact-page">
                    <Row>
                        <Col md="12"><h2>Please share details of your situation</h2>  </Col>
                        <ContactForm handleSubmit={this.handleSubmit } handleChange={this.handleChange} {...this.state}/>
                        <DangerForm/>
                            <div className="danger-score">
                            <h2>Your Danger Score is {this.props.dangerResult} and your Danger Level is {this.props.dangerLevel}
                            </h2>
                                <div className="dangerLevel-chart">
                                    <div className="red"> High 8-10</div>
                                    <div className="orange">Moderate 5-8</div>
                                    <div className="yellow">Variable 1-4</div>
                                </div>
                               
                            </div>
                    </Row>
                </Container>       
                < Footer/>
            </div>
        )
    }

}

export default withShelters(Contact)