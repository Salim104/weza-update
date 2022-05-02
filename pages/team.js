import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import { FaFacebook, FaLinkedin,FaGoogle,FaTwitter} from "react-icons/fa";
import {
  Card,
  Button,
  Container,
  Col,
  Row,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import Footer from '../components/footer'

const styles = { color: "#AE12FF", fontSize: "1.0em",margin:'5px'}
const cardStyle={borderRadius:'20px',overflow:'hidden'}



export const team = () => {
  return (
    <div className="content4" >
      <div className="NavB">
        <Navbar bg="main" varient="dark" sticky="top" expand="lg">
          <Navbar.Brand>
            <div className="img" href="index">
              <a href="http://localhost:3000/" className="img">
                <Image src="/logo.png" width={200} height={77} alt="" />
              </a>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="right">
            <Nav>
              <NavDropdown title="Products">
                <NavDropdown.Item href="products/product 1">
                  Free Tier
                </NavDropdown.Item>
                <NavDropdown.Item href="products/product 2">
                  Premium
                </NavDropdown.Item>
                <NavDropdown.Item href="products/product 3">
                  Ultimate
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="About Us">
                <NavDropdown.Item href="About Us/ Background">
                  Background
                </NavDropdown.Item>
                <NavDropdown.Item href="team">Meet The Team</NavDropdown.Item>
                <NavDropdown.Item href="About Us/Mission Statement">
                  Mission and Vission
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="products">Careers</Nav.Link>
              <Nav.Link href="signup">Donate </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="text-center mt-2 p-3">
        <h1 style={{color: "#AE12FF"}}>Meet Our Team</h1>
      </div>
      <div className="oyama">
        <p>
          The Abafazi team comprises of 6 young, dedicated, talented and
          hardworking individuals who have dedicated their lives to being
          philanthropist and taking charge in making South Africa a safe place
          for all who reside in it. These young individuals seeks to break the
          status quo of Gender Based Violence by engaging the youth to take
          charge and break the silence .
        </p>
      </div>
      <Container className="mt-2">
        <Row className="footer-margin">
          <Col lg={4} md={6} sm={12} className="text-start mt-2 p-3">
            <Card className="card" style={cardStyle}>
              <Card.Img
                variant="top"
                src="/oyama2.jpeg"
                width={250}
                height={250}
                alt=""
              />
              <Card.Body>
                <Card.Title>Oyama Makapela</Card.Title>
                <Card.Text>
                  <h6>Product Manager</h6>
                </Card.Text>
                <Card.Text>
                  Be the reason the world is a better place
                  <br />
                  <br />
                  <br />
                </Card.Text>

                <div className="icon" style={{borderTop:'1px solid #b1afb3'}}>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaFacebook size={20} style={styles} ></FaFacebook>
                  </a>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaGoogle size={20} style={styles}></FaGoogle>
                  </a>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaLinkedin size={20} style={styles} ></FaLinkedin>
                  </a>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaTwitter size={20} style={styles}></FaTwitter>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="text-start mt-2 p-3">
            <Card className="card"  style={cardStyle}>
              <Card.Img
                variant="top"
                src="/Jordan.jpg"
                width={250}
                height={250}
                alt=""
              />
              <Card.Body>
                <Card.Title>Jordan Gallant</Card.Title>
                <Card.Text>
                  <h6>Chief Operating Officer</h6>
                </Card.Text>
                <Card.Text>
                  I think about the future a lot, the advantages that technology
                  has, the ability and impact it has on our daily lives
                </Card.Text>
                     <div className="icon" style={{borderTop:'1px solid #b1afb3'}}>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaFacebook size={20} style={styles}></FaFacebook>
                  </a>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaGoogle size={20} style={styles}></FaGoogle>
                  </a>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaLinkedin size={20}style={styles} ></FaLinkedin>
                  </a>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaTwitter size={20} style={styles}></FaTwitter>
                  </a>
                </div>
           
              </Card.Body>
               
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="text-start mt-2 p-3">
            <Card className="card"  style={cardStyle}>
              <Card.Img
                variant="top"
                src="/sarimo.svg"
                width={250}
                height={250}
                alt=""
              />
              <Card.Body>
                <Card.Title>Salim Shabani</Card.Title>
                <Card.Text>
                  <h6>Frontend developer</h6>
                </Card.Text>
                <Card.Text>
                  We can choose to be affected by the world or we can choose to affect the world.
                  <br />
                  <br />
                </Card.Text>
                   <div className="icon" style={{borderTop:'1px solid #b1afb3'}}>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaFacebook size={20} style={styles} ></FaFacebook>
                  </a>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaGoogle size={20} style={styles}></FaGoogle>
                  </a>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaLinkedin size={20} style={styles} ></FaLinkedin>
                  </a>
                  <a href="http://localhost:3000/" className="img" style={{margin:'5px'}}>
                   <FaTwitter size={20} style={styles}></FaTwitter>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <hr></hr>
      <Footer></Footer>

    </div>
  );
};

export default team;
