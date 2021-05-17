import React from 'react';
import './App.css';
import * as RBS from 'react-bootstrap';

function App(){
  return (
    <div className="App">
      <RBS.Navbar bg="dark">
        <RBS.Navbar.Brand href="/" className="justify-content-left">
          <img
            src="images/BB2.png"
            width="200"
            height="100"
            className="d-inline-block align-top"
            alt="main-logo"
          />
        </RBS.Navbar.Brand>
          <RBS.Navbar.Toggle />
              <RBS.Navbar.Collapse className="justify-content-end">
                <RBS.Nav.Link href="/home" className="home">HOME</RBS.Nav.Link>
                <RBS.Nav.Link href="/rate-beer" className="rate">RATE-BEER</RBS.Nav.Link>
                <RBS.Nav.Link href="/sign-in" className="sign">SIGN-IN</RBS.Nav.Link>
              </RBS.Navbar.Collapse>
        </RBS.Navbar>

    </div>
  );
}

export default App;
