import React from 'react';
import * as RBS from 'react-bootstrap';


export class mymap extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            models:{},
            isLoaded: false
        };
    }
    componentDidMount(){
        fetch('http://api.barleybroo.com/review/list', {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('barleybrooKey')
            },
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                models: data,
                isLoaded: true
              });
        });
    }
    renderImg(){
        if(sessionStorage.getItem('user_score') < 100){
            return <RBS.Card></RBS.Card>
        }
    }

    renderElement(){
        if(sessionStorage.getItem('username') === null){
            return( <RBS.Card.Text>YOU NEED TO BE SIGNED IN TO VIEW THIS CONTENT</RBS.Card.Text>)

        }
        else{
            return <RBS.Card.Header>WELCOME TO YOUR JOURNEY</RBS.Card.Header>
        }
    }
    

    render(){
        const { isLoaded, models } = this.state;
        if(isLoaded){
            return(
                <RBS.Container fluid>
                    {this.renderElement()}
                    <RBS.Card.Img variant='top' src="./images/beer-god.jpg"></RBS.Card.Img>
                    <div>{sessionStorage.getItem('username')}</div>
                    <div>{models.map(model=><div>{model.user_email}</div>)}</div>
                </RBS.Container>
            ); 
        }
        else{
            return(
                <RBS.Container fluid>
                    {this.renderElement()}
                    <div>Loading...</div>
                </RBS.Container>
            );
        }
    }


}