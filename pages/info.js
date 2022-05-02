
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

         
          
          <Button variant="outline-primary" type="submit" href="http://localhost:3000/" className='pad'> HOME 
          </Button>{''}
        
        </Nav>

        </Navbar.Collapse>
       
      </Navbar>
      <div className='content'>
        <a>
        <h4>CONGRADULATIONS !! YOU HAVE SHARED YOUR FIRST LOCATION WITH YOUR WEZZIES!!</h4>

        <Image src='/currentl.svg'  width={700} height={500} alt=''/>
         </a>
      </div>


    </div>


  );
}
export default Dashboard;


