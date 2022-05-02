import React from "react";
import Head from "next/head";
import Image from "next/image";
import {FaTwitter,FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'
import "bootstrap/dist/css/bootstrap.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Carousel,
  Col,
  Row,
  Container,
  Card,
  Form,
  ListGroup,
  NavLink,
} from "react-bootstrap";

const styles = { color: "#AE12FF", fontSize: "1.0em",margin:'0px'}

function Footer() {
  return (
    <div>
      <Navbar bg="main" varient="dark" expand="lg" style={{flexDirection: "column",alignItems:"start"}}>
        <Navbar.Brand>
          <div className="img" style={{margin: "0px 20px"}} href="index">
            <a href="#" className="img">
              <Image
                src="/logo.svg"
                width={100}
                height={55}
                href="index"
                alt=""
              />
            </a>
          </div>
        </Navbar.Brand>
        <div className="last-footer">
          <div className="footer-row">
            <div className="col-about">
              <h3>About Weza</h3>
              <p>
              Weza is a geo-location elecronic neighbourhood watch app which allows the user to send disdress calls and emergenacies Weza is powered by artificial intelligence making it the first of its kind.
              </p>
          </div>
          <div className="col-about right">
            <div className="wrapper-col">
               <h3>Navigation</h3>

          <ul className="navigators">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
            </div>
          </div>
          </div>
          <div className="footer-last">
              <h3>Get in touch</h3>
              <ul className="social-icons">
                <li><a href="#"><FaTwitter size={20} style={styles}/></a></li>
                <li><a href="#"><FaFacebook size={20} style={styles}/></a></li>
                <li><a href="#"><FaInstagram size={20} style={styles}/></a></li>
                <li><a href="#"><FaLinkedin size={20} style={styles}/></a></li>
              </ul>
            <p>© Designed and Developed By Weza 2022</p>
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default Footer;
