import React, { Component } from 'react'
import ContactForm from './ContactForm';
import DangerForm from './DangerForm';
import DangerList from './DangerList';
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
        return (

            <div className="contact-container">
                <div className="header-resources">
                    <img className="resources-img" src={pic} alt="" />
                </div>
                <Container className="contact-page">
                    <Row>
                        <Col md="12"><h2>Please share details of your situation</h2>  </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <ContactForm handleSubmit={this.handleSubmit } handleChange={this.handleChange} {...this.state}/>
                        </Col>
                   
                        <Col md="6">
                            <DangerForm/>
                            {this.props.dangerResult}
                            {/* <DangerList/> */}
                        </Col>
                    </Row>
                </Container>       
                < Footer/>
            </div>
        )
    }

}

export default withShelters(Contact)