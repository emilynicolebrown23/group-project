import React from 'react'
// import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import pic from '../assets/shh-logo-light.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faHome, faMap} from '@fortawesome/free-solid-svg-icons'

library.add(faPhone, faEnvelope, faHome, faMap)


const Footer = () => {
  return (
    <div className="footer">
    <div className="last-section">
        <Container>
          <Row>
              <Col md="4" className="rborder">
                <h2>
                  <img className="logo-main-footer" src={pic} alt="" /> Shh..Safe Haven Help</h2>
                  
                <p><FontAwesomeIcon icon="home" /> V School Group Project</p>
                <p><FontAwesomeIcon icon="map" /> Impact Hub, Salt Lake City, UT</p>
                <p><FontAwesomeIcon icon="phone" /> 800-897-LINK <br /> <span class="sec-num">
                800-897-5465</span></p>
                <p><FontAwesomeIcon icon="envelope" /> january-cohort-2@vschool.io</p>
                <button className="facebook"></button>
                <button className="linkedin"></button>
                <button className="twitter"></button>
              </Col>
              <Col md="4" className="rborder" >
                <h2>24-Hour LINKLine</h2>
                <p>Free and confidential help and support for victims and survivors of domestic and intimate partner violence is available 24/7:</p>
                <p>1-800-897-LINK (5465)</p>
                <p>If you or someone else is in immediate danger, or in an emergency, call 9-1-1 immediately.</p>

              </Col>
              <Col md="3" className="pplgrid"> </Col>
           </Row>
        </Container>
    </div>
        {/* <Nav>
         <NavItem>
            <NavLink href="/">Shelter Search</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/involved">Get Involved</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/prevention">Prevention</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/resources">Resources</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
            <Link to="/contact">Contact</Link> 
          </NavItem>
        </Nav> */}
        <ul className="copyrightInfo">
          <li>&copy; 2019 Shh... Safe Haven Help</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
    </div>
  )
}

export default Footer