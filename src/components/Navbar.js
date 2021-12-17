import React from 'react'
import {Navbar} from 'react-bootstrap';

function NavBar(props) {
    console.log(props)
    return (
        <div className="NavBar sticky-top">
            <Navbar>
             <div className="container-fluid">
    <Navbar.Brand href="#home">
        {props.name}
    </Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <a href="#login">About</a>
        <a href="#login">Projects</a>
        <a href="#login">Contact</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </div>
</Navbar>
        </div>
    )
}

export default NavBar;
