// import React from 'react'
// import Footer from './Footer'


// const Resources = () => {
//     return (
//         <div className="resources-container">
//             Resources
//         < Footer />
//         </div>
//     )
// }

// export default Resources
import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import pic from '../assets/header_resources.jpg'
import pic2 from '../assets/carousel-pics_0002.jpg'
import Footer from './Footer'
import SearchList from './SearchList'
import Searchbar from '../Searchbar'


const Resources = () => {
    return (
        <div className="resources-container">
        <div className="header-resources">
                <img className="resources-img" src={pic} alt="" />
        </div>
            <Container>
                    {/* <h1>Find Your Shelter</h1>
                    <p>Discover a shelter that fits your needs in one of our active states.</p>

                    <Searchbar/>
                    <SearchList/> */}

                <Row>
                    <Col>
                    <h1>Find Your Shelter</h1>
                    <p>Discover a shelter that fits your needs in one of our active states.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">

                        <Searchbar/>
                        <SearchList/>
                        
                    </Col>
                    <Col md="6">
                        <ul>
                            <li>
                                <h2>Get Help Now</h2>
                                <p>Find free and confidential support, statewide, 24/7.</p>
                            </li>
                            <li>
                                <h2>Safety Planning</h2>
                                <p>Checklists and resources for maintaining safety.</p>
                            </li>
                            <li>
                                <h2>Tech Safety</h2>
                                <p>Tips for maintaining privacy and staying safe online.</p>
                            </li>
                        </ul>
                        
                        
                    </Col>
                </Row>
               

            </Container> 
            < Footer />
        </div>
    )
}

export default Resources
