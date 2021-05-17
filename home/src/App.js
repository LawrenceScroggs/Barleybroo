import React from 'react';
import './App.css';
import * as RBS from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <RBS.Navbar bg="dark">
          <RBS.Navbar.Brand href="/">
          <img
            src="images/BB1.png"
            width="100"
            height="125"
            className="d-inline-block align-top"
            alt="main-logo"
          />
          </RBS.Navbar.Brand>
          <RBS.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <RBS.Navbar.Collapse id="responsive-navbar-nav">
              <RBS.Nav className="justify-content-end">
                <RBS.Nav.Link href="/home" className="home">HOME</RBS.Nav.Link>
                <RBS.Nav.Link href="/rate-beer" className="rate">RATE-BEER</RBS.Nav.Link>
              </RBS.Nav>
          </RBS.Navbar.Collapse>
        </RBS.Navbar>

    </div>
  );
}

export default App;
