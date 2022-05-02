import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Card, Button , Form,Col,Row, Container} from 'react-bootstrap'

function adduser() {
    return (
    <div>

<div className="NavB">
            <Navbar bg="main" varient='dark' sticky="top"
      expand="lg">
        <Navbar.Brand>
        <a href='http://localhost:3000/' className="img">
          <Image src='/logo.png' width={200} height={77} alt=""/>
          </a>
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
          <Nav.Link href="signup">Log in </Nav.Link>
          
        </Nav>

        </Navbar.Collapse>
       
      </Navbar>
            </div>






        <div className="content2">
            <Container className="mt-2">
            <Row>
                <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    <Card.Body>
                    <Card.Title>Sign UP</Card.Title> 
                        <Form>
                                  
                                    <Form.Group controlid='forBasicEmail'>
                                       
                                        <Form.Control type ="Name" placeholder="Enter Your Name "/>
                                        <Form.Text className="text muted">
                                            <br/>
                                        </Form.Text>
                                        
                                    </Form.Group>
                                    

                                    <Form.Group controlid="forBasicPassword">
                                      
                                        <Form.Control type="Name" placeholder="Surname"/>
                                        <Form.Text className="text muted">
                                            <br/>
                                        </Form.Text>
                                        
                                    </Form.Group>

                                    <Form.Group controlid='forBasicEmail'>
                                       
                                        <Form.Control type ="email" placeholder="enter email address"/>
                                        <Form.Text className="text muted">
                                            <br/>
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlid='forBasicEmail'>
                                       
                                       <Form.Control type ="Name" placeholder="Home Address "/>
                                       <Form.Text className="text muted">
                                           <br/>
                                       </Form.Text>
                                   </Form.Group>
                                   <Form.Group controlid='forBasicEmail'>
                                       
                                       <Form.Control type ="Name" placeholder="Work Address "/>
                                       <Form.Text className="text muted">
                                           <br/>
                                       </Form.Text>
                                   </Form.Group>
                                   <Form.Group controlid='forBasicEmail'>
                                       
                                       <Form.Control type ="Name" placeholder="School Address "/>
                                       <Form.Text className="text muted">
                                           <br/>
                                       </Form.Text>
                                   </Form.Group>

                                   <Form.Group controlid="forBasicPassword">
                                      
                                       <Form.Control type="Name" placeholder="User Name"/>
                                       <Form.Text className="text muted">
                                           <br/>
                                       </Form.Text>
                                   </Form.Group>

                                    <Form.Group controlid="forBasicPassword">
                                       
                                        <Form.Control type="Password" placeholder="Password"/>
                                        <Form.Text className="text muted">
                                            <br/>
                                        </Form.Text>
                                    </Form.Group>
                                    <Button type="submit" href="signup">
                                        Sign Up
                                    </Button>
                                
                                </Form>
                </Card.Body>
            </Card>
            </Col>
            <Col lg={8} md={6} sm={12}>
                                <img src="/adduser.svg" className="w-100"/>
            </Col>
        </Row>
        </Container>
        </div>
    </div>
    )
}

export default adduser
