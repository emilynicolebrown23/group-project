import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import pic from '../assets/header_prevent.jpg'
import pic2 from '../assets/carousel-pics_0002.jpg'
import Footer from './Footer'
import Chatbot from './Chatbot'
import Counter from './Counter'
import CountUp from 'react-countup';

const Prevention = () => {
    return (
        <div className="prevention-container">
            <div className="header-resources">
                <img className="resources-img" src={pic} alt="" />
            </div>
            <Container>
                <Row>
                    <Col><h1>Know the Signs</h1></Col>
                </Row>
                <Row>
                    <Col xs="4">
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
                    <Col xs="8">
                       
                        <Chatbot/>

                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>


            </Container>
            <Counter />
            {/* <div className="stat-container">
               
                <img className="resources-img-2" src={pic2} alt="" />
                <div className="counter-container" >
                    <div className="counter-box-1">
                        <CountUp start={3954} end={3}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <p>
                                        1 in  <br />
                                        <span ref={countUpRef} /> <br/>
                                        <p className="stat-end">women experience some form of physical violence by an intimate partner.
                                        </p>
                                    </p>
                                    <button onClick={start}>Start</button>
                                </div>
                            )}
                        </CountUp>
                    </div> 
                    <div className="counter-box-2">
                        <CountUp start={3954} end={7}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <p>
                                        1 in  <br />
                                        <span ref={countUpRef} /> <br />
                                        <p className="stat-end"> women have been injured by an intimate partner.
                                        </p>
                                    </p>
                                    <button onClick={start}>Start</button>
                                </div>
                            )}
                        </CountUp>
                    </div> 
                    <div className="counter-box-3">
                        <CountUp start={3954} end={10}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <p>
                                        1 in  <br />
                                        <span ref={countUpRef} /> <br />
                                        <p className="stat-end">women have been raped by an intimate partner. 
                                        </p>
                                    </p>
                                    <button onClick={start}>Start</button>
                                </div>
                            )}
                        </CountUp>
                    </div> 
                
                </div>  
                
            
            </div> */}
            < Footer />
        </div>
    )
}

export default Prevention
