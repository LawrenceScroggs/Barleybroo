import React from 'react';
import * as RBS from 'react-bootstrap';
import './navbar.css';


export class navbar extends React.Component{

    render(){
        return(
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
                    <RBS.Nav.Link href="/my-map" className="my-map">MY-MAP</RBS.Nav.Link>
                  </RBS.Navbar.Collapse>
                  <RBS.Accordion bg="dark">
                    <RBS.Card bg="dark">
                      <RBS.Card.Header>
                        <RBS.Accordion.Toggle as="Button" variant="link" eventKey="0">
                          SIGN-IN
                        </RBS.Accordion.Toggle>
                      </RBS.Card.Header>
                      <RBS.Accordion.Collapse eventKey="0">
                        <RBS.Card.Body>
                          <RBS.Form>
                            <RBS.Form.Group controlId="formBasicEmail">
                              <RBS.Form.Label class="elab">Email address</RBS.Form.Label>
                                <RBS.Form.Control type="email" placeholder="Enter email" />
                                    <RBS.Form.Text  className="text-muted">
                                      We'll never share your email with anyone else.
                                    </RBS.Form.Text>
                            </RBS.Form.Group>

                            <RBS.Form.Group controlId="formBasicPassword">
                              <RBS.Form.Label class="plab">Password</RBS.Form.Label>
                                <RBS.Form.Control type="password" placeholder="Password" />
                            </RBS.Form.Group>
                            <RBS.Button variant="primary" type="submit">
                              Submit
                            </RBS.Button>
                          </RBS.Form>
                        </RBS.Card.Body>
                      </RBS.Accordion.Collapse>
                    </RBS.Card>
                  </RBS.Accordion>.
            </RBS.Navbar>
        );
    }
}