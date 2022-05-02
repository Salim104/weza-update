import React from 'react'
import Image from 'next/image'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.css'
import {Button, Col, Row, Container, Form, Card, Alert, error,Navbar,Nav, NavDropdown} from 'react-bootstrap'

//import {vercel} from '../public/vercel.svg'

 function Signup (){
    return (
        <div>

            <div className="NavB">
            <Navbar bg="main" varient='dark' sticky="top"
      expand="lg">
        <Navbar.Brand>
          <div className="img" href="index">
          <a href='http://localhost:3000/' className="img">
          <Image src='/logo.png' width={200} height={77} alt=""/>
          </a>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse className="right">
        <Nav>

          <NavDropdown title="Products">
            <NavDropdown.Item href="products/product 1">Free Tier</NavDropdown.Item>
            <NavDropdown.Item href="products/product 2">Premium</NavDropdown.Item>
            <NavDropdown.Item href="products/product 3">Ultimate</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="About Us">
             <NavDropdown.Item href="About Us/ Background">Background</NavDropdown.Item>
            <NavDropdown.Item href="team">Meet The Team</NavDropdown.Item>
            <NavDropdown.Item href="About Us/Mission Statement">Mission and Vission</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="products">Careers</Nav.Link>
          <Nav.Link href="signup">Donate </Nav.Link>
          
        </Nav>

        </Navbar.Collapse>
       
      </Navbar>
            </div>
            <div className="content">
                    <Container className="mt-2">
                        <Row>
                            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                                <Image src="/avatar.svg" width={200} height={77} className="ava" alt=""/>
                                <Form>
                                    
                                    <Form.Group controlid='forBasicEmail'>
                                       
                                        <Form.Control type ="email" placeholder="enter email address"/>
                                        <Form.Text className="text muted">
                                            <br/>
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group controlid="forBasicPassword">
                                       
                                        <Form.Control type="password" placeholder="Password"/>
                                        <Form.Text className="text muted">
                                            <br/>
                                        </Form.Text>
                                    </Form.Group>
                                    <Button variant="primary" className="w-100 h-60" type="submit" href="dashboard">
                                        Sign Up
                                    </Button>
                                
                                </Form>
                        

                            </Col>
                            <Col lg={8} md={6} sm={12}>
                                <img src="/authen.svg" className="w-100"/>
                            </Col>
                        </Row>

                        </Container>
                        </div>
                 <Footer/>
            
        </div>
    )
}
export default Signup