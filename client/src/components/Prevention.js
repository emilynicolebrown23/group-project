import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import pic from '../assets/carousel-pics_0000.jpg'
import pic2 from '../assets/carousel-pics_0002.jpg'
import Footer from './Footer'
import Chatbot from './Chatbot'

const Prevention = () => {
    return (
        <div className="Resources-container">
            <div className="header-resources">
                <img className="resources-img" src={pic} alt="" />
            </div>
            <Container>
                <Row>
                    <Col><h1>Know the Signs</h1></Col>
                </Row>
                <Row>
                    <Col xs="6">
                        <p>Although it is not always easy to immediately recognize an abusive relationship, knowing some of the signs of domestic violence can help save a life.</p>
                        <p>Anyone of any race, gender, age, sexual orientation, social status or religion can be a victim of domestic violence.</p>
                        <p>Abuse occurs in many forms:</p>
                        <ul>
                            <li>Physical</li>
                            <li>Emotional</li>
                            <li>Financial</li>
                            <li>Sexual</li>
                            <li>Digital</li>
                            <li>Reproductive coercion</li>
                        </ul>
                        <p>Learn more about the signs and many forms of domestic abuse: <a href="http://thehotline.org/">thehotline.org.</a>
                        </p>
                        <ListGroup>
                            <ListGroupItem>
                                <ListGroupItemHeading>LINKLine Advocate</ListGroupItemHeading>
                                <ListGroupItemText>
                                    The LINKLine is Utah's 24/7 domestic violence crisis hotline. As a LINKLine advocate volunteer, you will connect individuals who are experiencing domestic violence with resources in or near their community. Training is required and will be provided at no cost to you.
                                 </ListGroupItemText>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col xs="6">
                       
                        <Chatbot/>
                        
                    </Col>
                </Row>


            </Container>
            <div><img className="resources-img-2" src={pic2} alt="" />
            </div>
            < Footer />
        </div>
    )
}

export default Prevention
