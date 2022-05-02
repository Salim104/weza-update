import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card,Form, ListGroup, NavLink} from 'react-bootstrap'



function Navbar1() {
  return ( 
  
    <div>
             <Navbar bg="main" className="pb-0" varient='dark' 
      expand="lg">
        <Navbar.Brand className="py-0">
          <div className="img" style={{margin: "0px 20px"}} href="index">
            <a href='#' className="img">
          <Image src='/logo.png' width={200} height={77} href="index" alt=""/>
          </a>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse className="right" style={{justifyContent: "end"}}>
        <Nav style={{margin: "0px 20px"}}>

          <Nav.Link href="product">FEATURES</Nav.Link>
          <Nav.Link href="team"> ABOUT US</Nav.Link>
          <Nav.Link href="products">CAREERS</Nav.Link>
          <Nav.Link href="adduser">SIGN UP</Nav.Link>
          <Col >
          <Button variant="outline-primary" type="submit" href="signup" className='pad'> LOG IN 
          </Button>{''}
          </Col>
          
        </Nav>

        </Navbar.Collapse>
       
      </Navbar>

        </div>);
}

export default Navbar1;
