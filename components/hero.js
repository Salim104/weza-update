import React from "react";
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card,Form, ListGroup, NavLink} from 'react-bootstrap'




function Hero (){
    return(
        <div className='content5'>

                <Container className="mt-10">
                  <Row>
                      <Col  lg={6} md={6} sm={12}className="text-start mt-2">
                      <img src="/loc.svg"  className="w-100"/>
                      </Col>
                      <Col  lg={6} md={6} sm={12} className="text-start d-flex align-items-start mt-5 flex-column justify-content-center">
                        <h3 className="title-sub">Welcome to the future</h3>
                    <div className="oyama  d-flex align-items-start flex-column justify-content-start">
                    <p className="text-start title-disc">Safety Re-imagined,Weza is planning to reduce the crime rate by over 30 percent within the first 6 months of operating through Private and Public collaboration with the SAPS and the Home Affairs.
                    </p>
                    </div>
                    <Button variant="primary" className="h-60 btn-main" type="submit" href="product">
                                        DOWNLOAD APP
                    </Button>{''}
                               
                      </Col>
                  </Row>

                  </Container>
        </div>
    )
}
export default Hero 