import React from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Card, Button , Form,Col,Row, Container, ListGroup} from 'react-bootstrap'

function product() {
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
            <Nav.Link href = "http://localhost:3000/">HOME</Nav.Link>
            <Nav.Link href = "products">CAREERS</Nav.Link>
            <Nav.Link href = "products">BLOG</Nav.Link>
            <Nav.Link href = "products">CONTACT</Nav.Link>
            <Nav.Link href = "products">DONATE</Nav.Link>

          
        </Nav>

        </Navbar.Collapse>
       
      </Navbar>
            </div>






        <div className="content2">
            <div className="text-center mt-2 p-3">

            <h1>PRICING</h1>
            <h6>Flexible packages to suit your use-case. Choose between Free, Pay-as-you-Use and Subscription plans.</h6>
            
            </div>
            <Container className="mt-2">
            <Row>
                <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/auth1.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>LITE</Card.Title>
                   <ListGroup variant="flush">
                       <ListGroup.Item>Live Location</ListGroup.Item>
                       <ListGroup.Item>Add 3 Members</ListGroup.Item>
                       <ListGroup.Item>2 Emergency Calls</ListGroup.Item>
                       <div className='line'>
                       <ListGroup.Item>Social Media Sync</ListGroup.Item>
                       </div>
                       <div className='line'>
                       <ListGroup.Item>e-Hailing Sync</ListGroup.Item>
                       </div>
                       <div className='line'>
                       <ListGroup.Item>24 hours services</ListGroup.Item>
                       </div>
                     
                       <ListGroup.Item><h6>R29.99/monthly.Billed R329.99 yearly</h6></ListGroup.Item>
                   </ListGroup>
                  
                   <Button variant='outline-primary' href="dashboard" className="w-100 line2">{''}
                                        GET STARTED 
                    </Button>
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/liveloc.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>PLUS</Card.Title>
                    <ListGroup variant="flush">
                       <ListGroup.Item>Live Location</ListGroup.Item>
                       <ListGroup.Item>Add 5 Members</ListGroup.Item>
                       <ListGroup.Item>10 Emergency Calls</ListGroup.Item>
                       <ListGroup.Item>Social Media Sync</ListGroup.Item>
                       <div className='line'>
                       <ListGroup.Item>e-Hailing Sync</ListGroup.Item>
                       </div>
                       <div className='line'>
                       <ListGroup.Item>24 hours services</ListGroup.Item>
                       </div>
                       
                       <ListGroup.Item><h6>R59.99/monthly.Billed R559.99 yearly</h6></ListGroup.Item>
                   </ListGroup>
                   
                   <Button variant='outline-primary' href="dashboard" className="w-100 line2">{''}
                                        GET STARTED 
                    </Button>
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                <Card.Img variant='top' src="/user2.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>PREMIUM</Card.Title>
                    <ListGroup variant="flush">
                       <ListGroup.Item>Live Location</ListGroup.Item>
                       <ListGroup.Item>Add 10 Members</ListGroup.Item>
                       <ListGroup.Item>20 Emergency Calls</ListGroup.Item>
                       <ListGroup.Item>Social Media Sync</ListGroup.Item> 
                       <ListGroup.Item>e-Hailing Sync</ListGroup.Item>
                       <ListGroup.Item>24 hours services</ListGroup.Item>
                       <ListGroup.Item><h6>R89.99/monthly.Billed R989.99 yearly</h6></ListGroup.Item>
                       
                   </ListGroup>
                    
                    <Button variant='outline-primary' href="dashboard" className="w-100 line2">{''}
                                        GET STARTED 
                    </Button>
                                
                </Card.Body>
           
            </Card>
            </Col>
        </Row>
        </Container>
        </div>
    </div>
    )
}

export default product 
