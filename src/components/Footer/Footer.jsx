import React from 'react'
import "./footer.css"

import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
const Footer = () => {

  const year = new Date().getFullYear();  
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg="4" className='mb-4' md='6'>
          <div className="logo">
            <div>
              <h1 className='text-white'>Multimart</h1>
            </div>
          </div>
          <p className="footer__text mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Quidem ex, sit optio magnam ea corrupti id laboriosam ratione 
              rerum quos?
            </p>
          </Col>

          <Col lg="3" md='3' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md='3' className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md='4'className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contacts</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  <p>123 Melur, Madurai, Tamilnadu</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  <p>+91 9342104213</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex
                align-items-center gap-2'>
                  <span><i class="ri-mail-send-line"></i></span>
                  <p>gokuljcse2021@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className='footer__copyright'>
              Copyright {year} developed by Gokul J. All rights
              reserverd.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer