import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './common.css'


function Header() {
  return (
    <Navbar id='header' expand="lg">
    <Container>
     <h1>ANC</h1>
     
    </Container>
  </Navbar>
  )
}

export default Header