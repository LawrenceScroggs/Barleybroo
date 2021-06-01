import React from 'react';
import * as RBS from 'react-bootstrap';
import config from 'react-global-configuration';
import './navbar.css';
import { Redirect } from 'react-router-dom';


export class Navbar extends React.Component{

  constructor(props) {
    super(props);
  //  this.state = {};
    
    this.state = {
      username: '',
      password: '',
      grant_type: 'password',
    };
   /* 
    this.state["grant_type"] = "password";
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    */
  }
  handleEmailChange = (event) => {
    this.setState({
      username: event.target.value,
    })
    console.log(this.state.username)
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    })
    console.log(this.state.password)
  }

  handleSubmit = (event) => {
    let ek = encodeURIComponent(this.state.grant_type);
    let ek1 = encodeURIComponent(this.state.username);
    let ek2 = encodeURIComponent(this.state.password);
    let newVal = "grant_type=" + ek + "&username=" + ek1 + "&password=" + ek2;
    
    fetch('http://api.barleybroo.com/token', {
            method: "POST",
            headers: {
                'Content-Type' : "application/x-www-form-urlencoded",
            },
            redirect: 'follow'
            body: newVal
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('barleybrooKey', data.access_token);
            sessionStorage.setItem('username', this.state.username);
            window.location.href = config.get('host');
        });

    event.preventDefault();
  }

  /*
  onSubmit = () => {
    return <Redirect to="Barleybroo.com/my-map" />
  }
  */
  renderElement(){
    if(sessionStorage.getItem('username')===null){
      return <RBS.Accordion bg="dark">
          <RBS.Card bg="dark">
            <RBS.Card.Header>
              <RBS.Accordion.Toggle as="Button" variant="link" eventKey="0">
                SIGN-IN
              </RBS.Accordion.Toggle>
            </RBS.Card.Header>
            <RBS.Accordion.Collapse eventKey="0">
              <RBS.Card.Body onSubmit={this.handleSubmit}>
                <RBS.Form>
                  <RBS.Form.Group controlId="formBasicEmail" >
                    <RBS.Form.Label class="elab">Email address</RBS.Form.Label>
                      <RBS.Form.Control 
                          type="email" 
                          name="email" 
                          placeholder="Enter email" 
                          value = {this.state.value} 
                          onChange={this.handleEmailChange}
                          />
                          <RBS.Form.Text  className="text-muted">
                            We'll never share your email with anyone else.
                          </RBS.Form.Text>
                  </RBS.Form.Group>
                  <RBS.Form.Group controlId="formBasicPassword">
                    <RBS.Form.Label class="plab">Password</RBS.Form.Label>
                      <RBS.Form.Control 
                        name="password"
                        type="password" 
                        placeholder="Password" 
                        value={this.state.value}
                        onChange={this.handlePasswordChange}/>
                  </RBS.Form.Group>
                  <RBS.Button variant="primary" type="submit" value="submit" onClick={this.onSubmit}>
                    Submit
                  </RBS.Button>
                </RBS.Form>
              </RBS.Card.Body>
            </RBS.Accordion.Collapse>
          </RBS.Card>
        </RBS.Accordion>;
    }
    else return <div className="home">{sessionStorage.getItem('username')}</div>;
  }
    render(){
        return(
            //console.log(this.isSignedIn)
            //if(!this.isSignedIn){
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
                  {this.renderElement()}
            </RBS.Navbar>
        //}
        );
      }
}
export default Navbar;