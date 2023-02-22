import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeTD_U6J00PLBnz_w-Pk638YvTQyx9QQA21g&usqp=CAU"
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
        Tinny Cafe
      </Navbar.Brand>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header