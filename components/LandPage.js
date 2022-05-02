import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card,Form, ListGroup, NavLink} from 'react-bootstrap'


function LandPage() {
    const h1style={
        color:'#130515',
        fontWeigh: '600',
    }

    return (
      <div className='content'>

      <Container className="mt-2">
                        <Row>
                            <Col  lg={6} md={6} sm={12} className="text-start d-flex align-items-start flex-column justify-content-center mt-2 p-3">
                              <h1 className='title-main'>Weza</h1>
                              <h2>e-Neighbourhood Watch </h2>
                              <h3 className='title-sub'>Safety In Your Pocket</h3>
                              <p className='title-disc'>Weza is a geo-location electronic neighbourhood  watch app which allows the user to send distress
                                calls and emergencies.Weza is powered by artificial intelligence making it the first of its kind.</p>
                             <Col sm={12}>
                              <Button variant="primary"  className='btn-main'  href="product">
                                        View Pricing
                               </Button>{''}
                               </Col>
                               
                            </Col>
                            <Col lg={6} md={6} sm={12} className="text-center mt-2 p-3">
                                <img src="/location1.2.svg" className="w-100 " alt=''/>
                            </Col>
                        </Row>

                        </Container>

        </div>
    )
}

export default LandPage
