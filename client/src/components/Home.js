import React from 'react'
// import Searchbar from '../Searchbar'

import SearchList from './SearchList'
import Carousel from './Carousel'
import { Container, Row, Col } from 'reactstrap';
import Cards from './Cards'
import Event from './Event'
import Footer from './Footer'



const Home = () => {
    return (
        <div className="home-container">
               
            {/* <Searchbar/> */}
            

            <Carousel />
            <Container>
                <Row className="MT-first-sec">
                    <Cards />
                </Row>
                <Row className="MT-second-sec event-sec">
                    <Col md="6"><Event /></Col>
                    <Col md="6">
                        <img src="https://via.placeholder.com/500x570" alt=""/>
                    </Col>
                </Row>
               
            </Container>
            <SearchList /> 
            
            <Footer />
        </div>
    )
}

export default Home