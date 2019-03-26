import React from 'react'
// import Searchbar from '../Searchbar'

import SearchList from './SearchList'
import Carousel from './Carousel'
import { Container, Row, Col } from 'reactstrap';
import Cards from './Cards'
import Event from './Event'
import Footer from './Footer'
import Searchbar from '../Searchbar';



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
                    <Col md="6" className="photo-home">
                        
                    </Col>
                </Row>
                <Row> 
                    <div className="home-search">
                        <h1>Find Your Shelter</h1>
                        <p>Discover a shelter that fits your needs in one of our active states.</p>
                        <Searchbar/>
                        
                    </div>
                </Row>
                <Row>
                    <SearchList /> 
                </Row>

               
            </Container>
           
               

            <Footer />
        </div>
    )
}

export default Home