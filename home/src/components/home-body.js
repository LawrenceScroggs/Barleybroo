import React from 'react';
import * as RBS from 'react-bootstrap';
import './home-body.css';


export class home_body extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirm_password: '',

        };
    }
    componentDidMount(){

    }
    componentWillMount(){}
    handleEmail = (event) => {
        console.log(event.target.value)
        this.setState({
            email: event.target.value,
        })
        
    }
    handlePassword = (event) => {
        console.log(event.target.value)
        this.setState({
            password: event.target.value,
        })
        
    }
    handleConfirm = (event) => {
        console.log(event.target.value)
        this.setState({
            confirm_password: event.target.value,
        })
        
    }
    handleSubmit = (event) => {
        console.log(this.state);
        fetch('http://api.barleybroo.com/account/register', {
            method: "POST",
            headers: {
                'Content-Type' : "application/json",
            },
            body: JSON.stringify(this.state)
        }).then(function(response) {
            console.log(response);
            return response.json();
            
        });
        event.preventDefault();
    
    }
    onSubmit = () => {
        this.props.history.push('/my-map');
    }
    renderElement(){
        if(sessionStorage.getItem('username')===null){
            return <RBS.Card border="dark" style={{width: "40rem", height: "28rem" }} class="home-form">
                    <RBS.Form class="signform" onSubmit={this.handleSubmit}>
                        <RBS.Form.Group class="Sign-up">Sign Up Here</RBS.Form.Group>
                        <RBS.Form.Group controlId="formBasicEmail">
                            <RBS.Form.Label>Email address</RBS.Form.Label>
                                <div class="email1">
                                <RBS.Form.Control class="email" type="email" placeholder="Enter email" 
                                value={this.state.value} name="email" onChange={this.handleEmail}/>
                                </div>
                                    <RBS.Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </RBS.Form.Text>
                        </RBS.Form.Group>
                        <RBS.Form.Group controlId="formBasicPassword">
                            <RBS.Form.Label>Password</RBS.Form.Label>
                                <div class="pass1">
                                <RBS.Form.Control class="password" type="password" placeholder="Enter Password" 
                                value={this.state.value} name="password" onChange={this.handlePassword}/>
                                </div>
                        </RBS.Form.Group>
                        <RBS.Form.Group controlId="formBasicPassword-1">
                            <RBS.Form.Label>Please Re-Enter Password</RBS.Form.Label>
                                <div class="pas2">
                                <RBS.Form.Control class="confirm_password" type="password" placeholder="Please Re-Enter Password" 
                                value={this.state.value} name="confirm_password" onChange={this.handleConfirm}/>
                                </div>
                        </RBS.Form.Group>
                        <RBS.Form.Group controlId="already-user">
                            <RBS.Form.Text className="text-muted" href="/sign-in/">
                                Already a user Click Here
                            </RBS.Form.Text>
                        </RBS.Form.Group>
                        <RBS.Button class="butt" variant="primary" type="submit">
                            Submit
                        </RBS.Button>
                    </RBS.Form>
                    </RBS.Card>;
        }
        else return null;
    }
    
    render(){
        return(
            <RBS.Container fluid>
                <RBS.Row className="back-ground" >
                    <RBS.Col className='mp-20'>
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
                        {this.renderElement()}
                       
                        </div> 
                    </RBS.Col>
                </RBS.Row>
            </RBS.Container>
        );

    }
}