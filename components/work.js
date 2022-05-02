import React from "react";
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card,Form, ListGroup, NavLink} from 'react-bootstrap'

function Work(){
    return(
        <div className="content3 text-center  p-3">
        
      <Container className="mt-2">
      <div className="text-center mt-2 p-3">

      <h1>How Weza Works</h1>

      </div>    
            
            <Row>
                {/* text-center mt-2 p-3 col-lg-4 col-md-6 col-sm-12 ==ori */}
                {/* text-center mt-2 p-3 col-lg-4 col-md-6 col-sm-12 ==mine */}

            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="yams">
                    
                    <Card.Img variant='top' src="/Add Wezies.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Add Wezies</Card.Title>
                    <Card.Text className="oyama ">
                     
                      <p>Depending on your subscription, Weza lets you add Wezies. 
                      Wezies are your emergancy contacts that will be sent an sms 
                      and a whatsapp text message of your current live location 
                      and also the e-hailing ride details whenever your are not safe. 
                      A Wezie can be your mother, father, Friend, Teacher or your pastor.</p> 
                  
                    </Card.Text>
                   
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/Primary Location.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Select Primary Location</Card.Title>
                    <Card.Text className="oyama">
                      
                     <p>
                     Weza lets you add more than 1 primary location, it can be your home, work,
                      school or church it is totally up to you. Selecting your primary location enables 
                      Weza to create a safe ecosystem that increases the response time. 
                      Weza will alert other users who are within a radius of your location when you are in danger. </p> 
                    
                    </Card.Text>
                    
                        
                </Card.Body>
            </Card>
            </Col>

            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/Community.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Search for Community</Card.Title>
                    <Card.Text className="oyama">
                     
                     <p> Weza in collaboration with the Community Police Forum (CPF) ar 
                      commited to keeping the community safe. In doing so Weza has an 
                      ecosystem of CPFs across South Africa with every location having an 
                      e-Neighborhood watch community and as a usser you can 
                      search for any community around your urrent location.</p>
                   
                    </Card.Text>
                   
                        
                </Card.Body>
            </Card>
            </Col>

                <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
               <div className="yams">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/Data Science.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Data Science</Card.Title>
                    <Card.Text className="oyama">
                    
                    <p>Weza collects user information such as Location, Age, Gender and Merital Status . 
                      This information is used to clustify which area, age group and gender is a high risk. The data is collected 
                      ,cleaned and converted into csv for data analyses using Machine Learning algorythms. These algorythms   </p>
                  
                    <br/>
                    <br/>
                    <br/>   
                    <br/>               
                 
                    </Card.Text>
                  
                        
                </Card.Body>
               
            </Card>
            </div>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                    
                    <Card.Img variant='top' src="/Artificial Intelligence.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>Artificial Intelligence</Card.Title>
                    <Card.Text className="oyama">
                     
                      <p>Weza uses Linear regression to scale the data and use it to make 
                      predictions of high risk areas around you. Weza uses a supervised and a 
                      semi supervised machine learning model to make predictionc based on which 
                      location has the highest distress calls made , which age group has the highest 
                      distress call and which gender has the highest 
                      distress calls. All this information is used to give the user the best experience when it comes to safety .
                      </p> 
                    
                    </Card.Text>
                    
                        
                </Card.Body>
            </Card>
            </Col>
            <Col lg={4} md={6} sm={12} className="text-center mt-2 p-3">
                <Card className="card">
                <Card.Img variant='top' src="/E-Hailling.svg" width={200} height={200} className="mt-2"/>
                <Card.Body>
                    <Card.Title>E-Hailling</Card.Title>
                    <Card.Text className="oyama">
                   
                  <p>Weza premium subscription lets users sync all their e-hailing services such 
                   as Bolt,Uber and Taxify. All the driver information including the place the 
                   ride was requested from up untill the destination will be sent to your weza members. 
                   Using data Weza powered AI will find the safest driver 
                   for you based on the driver ID and ratings, this makes yor trips extra safe . </p>

                    <br/>
                    <br/>
                  
                    </Card.Text>        
                </Card.Body>
                
            </Card>
            
            </Col>
        </Row>
        </Container>
        </div>
    )
}
export default Work