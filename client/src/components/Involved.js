import React from 'react'
import Footer from './Footer'
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import VolunteerForm from './VolunteerForm'
import pic from '../assets/header_involved.jpg'


const Involved = () => {
    return (
        <div className="involved-container">
            <div className="module-border-wrap">
                <img className="volunteer-img" src={pic} alt="" />
             </div>
            <Container>
                <Row>
                    <Col xs="12 module-border-wrap">
                        
                    </Col>
                </Row>
                <Row>
                    <Col xs="12"><p className="involved-para MT-first-sec">
                        Volunteers are integral to our organization and to the safety of our community. We offer a variety of volunteer opportunities to best meet your skills, comfort and schedule.
                        </p></Col>
                </Row>
                <Row>
                    <Col md="6">
                        <ListGroup>
                            <ListGroupItem>
                                <ListGroupItemHeading>LINKLine Advocate</ListGroupItemHeading>
                                <ListGroupItemText>
                                    The LINKLine is Utah's 24/7 domestic violence crisis hotline. As a LINKLine advocate volunteer, you will connect individuals who are experiencing domestic violence with resources in or near their community. Training is required and will be provided at no cost to you.
                                 </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>General Office</ListGroupItemHeading>
                                <ListGroupItemText>
                                    Work closely with our administrative team to prepare and execute various general office tasks.
                                 </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>Fundraising</ListGroupItemHeading>
                                <ListGroupItemText>
                                   Assist with fundraising and development opportunities and events.
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>Events</ListGroupItemHeading>
                                <ListGroupItemText>
                                    Represent our organization at various outreach and public awareness events. Training is provided.
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>Interns</ListGroupItemHeading>
                                <ListGroupItemText>
                                    Gain experience by working with the experts on our team in our efforts to advocate, collaborate and educate the community.
                                </ListGroupItemText>
                            </ListGroupItem>
                            <ListGroupItem>
                                <ListGroupItemHeading>Guest Speakers</ListGroupItemHeading>
                                <ListGroupItemText>
                                    Share your wisdom, expertise and life experience—as a professional and/or a survivor—by speaking at various conferences, summits, and webinars.                                
                                </ListGroupItemText>
                            </ListGroupItem>
                        </ListGroup>

                    </Col>
                    <Col md="6">
                        < VolunteerForm />
                    </Col>
                </Row>
                
            </Container>   
            <Footer />
        </div>
    )
}

export default Involved