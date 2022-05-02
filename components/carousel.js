import React from "react";
import Image from "next/dist/client/image";
import {Nav,Navbar, NavDropdown, Button, Carousel, Col, Row, Container , Card,Form, ListGroup, NavLink} from 'react-bootstrap'




function Car (){
    return(
        <div className='mid'>
             <Carousel>
          <Carousel.Item interval="1000">
            <Image className="d-block w-100" src="/AI.svg"  width={500} height={500} alt="First slide"/>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval="1000">
            <Image className="d-block w-100" src="/uber.svg"  width={500} height={500} alt="First slide"/>
            <Carousel.Caption>
            <p>UUUUUUUUUU</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel.Item interval="1000">
            <Image className="d-block w-100" src="/data.svg"  width={500} height={500} alt="First slide"/>
            <Carousel.Caption>
             
            </Carousel.Caption>
          </Carousel.Item>

        </div>
    )
}
export default Car 