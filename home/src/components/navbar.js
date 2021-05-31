import React from 'react';
import * as RBS from 'react-bootstrap';
import './navbar.css';


export class Navbar extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
    
    /*
    this.state = {
      username: '',
      password: '',
      grant_type: 'password'
    };
    */
    
    this.state["grant_type"] = "password";
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleEmailChange(event) {
    this.state['username'] = event.target.value;
  }
  handlePasswordChange(event) {
    this.state['password'] = event.target.value;
  }
  handleSubmit(event) {
    this.formData = [];
    for (var property in this.state) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(this.state[property]);
      this.formData.push(encodedKey + "=" + encodedValue);
    }
    this.formData = this.formData.join("&");
    
    //alert('form data: ' + this.formData);
    fetch('http://api.barleybroo.com/token', {
            method: "POST",
            headers: {
                'Content-Type' : "application/x-www-form-urlencoded",
            },
            body: this.formData
        })
        .then(response => response.json())
        .then(data => {
            //alert(data.access_token);
            localStorage.setItem('barleybrooKey', data.access_token);
            //alert(localStorage.getItem('barleybrooKey'));
        });

    event.preventDefault();
  }
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
                        <RBS.Card.Body onSubmit={this.handleSubmit}>
                          <RBS.Form>
                            <RBS.Form.Group controlId="formBasicEmail" >
                              <RBS.Form.Label class="elab">Email address</RBS.Form.Label>
                                <RBS.Form.Control 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter email" 
                                    value = {this.state.username} 
                                    onChange={this.handleEmailChange}
                                    />
                                    <RBS.Form.Text  className="text-muted">
                                      We'll never share your email with anyone else.
                                    </RBS.Form.Text>
                            </RBS.Form.Group>

                            <RBS.Form.Group controlId="formBasicPassword">
                              <RBS.Form.Label class="plab">Password</RBS.Form.Label>
                                <RBS.Form.Control 
                                  type="password" 
                                  placeholder="Password" 
                                  value={this.state.password}
                                  onChange={this.handlePasswordChange}/>
                            </RBS.Form.Group>
                            <RBS.Button variant="primary" type="submit" value="submit">
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
export default Navbar;