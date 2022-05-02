import React from "react";
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card,Form, ListGroup, NavLink} from 'react-bootstrap'



function Hero2 (){
    return(
        <div className='contenth'>

                <Container className="mt-10 ">
                  <Row>
                  <Col  lg={6} md={6} sm={12} className="text-start d-flex align-items-start mt-5 flex-column justify-content-center mt-5">
                        <h3 className="title-sub">Welcome to the future</h3>
                    <div className="">
                    <p className="title-disc">In collaboration With the South African Police Service and the Community Policing Forum, Weza seeks to create a safe eco-system
                      where woman, children and other marginalised groupss can live together in harmony.
                      Weza is not only limited to Women and children but they take priority.
                    </p>
                    </div>
                    <Button variant="primary" className="h-60 btn-main" type="submit" href="product">
                                            GET STARTED
                    </Button>
                               
                        
                      </Col>

                      <Col  lg={6} md={6} sm={12}className="text-center mt-2 d-flex align-items-center justify-content-center">
                      <img src="/best place.svg"  className="ww-100"/>
                      </Col>
                
                  </Row>

                  </Container>
        </div>

    )
}
export default Hero2