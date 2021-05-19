import React from 'react';
import * as RBS from 'react-bootstrap';
import './home-body.css';


export class home_body extends React.Component{
    render(){
        return(
            <RBS.Container fluid>
                <RBS.Row className="back-ground" style={{height: '100%'}}>
                    <RBS.Col className="mp-20 text-center">
                        <div class="img-hold">
                        <RBS.Card class="bes" bg="dark" text="white" >
                            <RBS.Card.Img variant="top" src="./images/bes_god.jpeg" />
                                <RBS.Card.Body >
                                    <RBS.Card.Text>
                                        Bes (/ˈbɛs/; also spelled as Bisu), together with his feminine counterpart Beset,
                                        is an ancient Egyptian deity worshipped as a protector of households and, in 
                                        particular, of mothers, children and childbirth. Bes later came to be regarded as 
                                        the defender of everything good and the enemy of all that is bad. Bes may have 
                                        been a Middle Kingdom import from Nubia or Somalia, and his cult did not become 
                                        widespread until the beginning of the New Kingdom.

                                        Worship of Bes spread as far north as the area of Syria and as far west as the 
                                        Balearic Islands (Ibiza) in Spain, and later into the Roman and Achaemenid Empires. 
                                    </RBS.Card.Text>
                                </RBS.Card.Body>
                        </RBS.Card>
                                </div>
                    </RBS.Col>
                    <RBS.Col className="mp-20">
                        <div class="home-butt">
                        <RBS.Card class="home-form">
                        <RBS.Form>
                            <RBS.Form.Group class="Sign-up">Sign Up Here</RBS.Form.Group>
                            <RBS.Form.Group controlId="formBasicEmail">
                                <RBS.Form.Label>Email address</RBS.Form.Label>
                                    <RBS.Form.Control type="email" placeholder="Enter email" />
                            </RBS.Form.Group>
                            <RBS.Form.Group controlId="formBasicEmail-2">
                                <RBS.Form.Label>Verify Email address</RBS.Form.Label>
                                    <RBS.Form.Control type="email" placeholder="Enter email" />
                                        <RBS.Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </RBS.Form.Text>
                            </RBS.Form.Group>

                            <RBS.Form.Group controlId="formBasicPassword">
                                <RBS.Form.Label>Password</RBS.Form.Label>
                                    <RBS.Form.Control type="password" placeholder="Password" />
                            </RBS.Form.Group>
                            <RBS.Form.Group controlId="already-user">
                                <RBS.Form.Text className="text-muted" href="/sign-in/">
                                    Already a user Click Here
                                </RBS.Form.Text>
                            </RBS.Form.Group>
                            <RBS.Button variant="primary" type="submit">
                                Submit
                            </RBS.Button>
                        </RBS.Form>
                        </RBS.Card>
                        </div> 
                    </RBS.Col>
                </RBS.Row>
            </RBS.Container>
        );
    }
}