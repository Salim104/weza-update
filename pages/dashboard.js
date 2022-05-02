
import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import {Nav,Navbar, NavDropdown, Button } from 'react-bootstrap'
import {location} from '../public/location.svg'
//import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
//require ('dotenv').config();


function Dashboard(){
  return(
    <div className='app'>
      <Navbar bg="main" varient='dark'
      sticky='top'expand="lg">
        <Navbar.Brand>
        <div className="img" href="index">
            <a href='http://localhost:3000/' className="img">
          <Image src='/logo.png' width={200} height={77} href="index" alt=""/>
          </a>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle/>
       <Navbar.Collapse className="right">
        <Nav className="right">

         
          <Nav.Link href="products">PROFILE</Nav.Link>
          <Nav.Link href="products">CAREERS</Nav.Link>
          <Nav.Link href="products">BLOG</Nav.Link>
          <Button variant="outline-primary" type="submit" href="info" className='pad'> SEND INFO 
          </Button>{''}
        
        </Nav>

        </Navbar.Collapse>
       
      </Navbar>
      <div className='content'>
        <a href='product'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.0963943058864!2d27.864367509017082!3d-26.226057272146786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95a12564702ca1%3A0xf87c854290ef46b2!2s560%20Nomwa%20St%2C%20Dobsonville%2C%20Soweto%2C%201863!5e0!3m2!1sen!2sza!4v1629562494626!5m2!1sen!2sza" width="1300" height="550" loading="lazy"></iframe>
         </a>
      </div>


    </div>


  );
}
export default Dashboard;
