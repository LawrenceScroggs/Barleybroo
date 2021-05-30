import React from 'react';
import * as RBS from 'react-bootstrap';

export class all_comments extends React.Component{
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
    render(){
        const { isLoaded, models } = this.state;
        if(isLoaded){
            return(
                <RBS.Container fluid>
                    <div>{models.map(model=><div>{model.review_id}</div>)}</div>
                </RBS.Container>
            ); 
        }
        else{
            return(
                <RBS.Container fluid>
                    <div>Loading...</div>
                </RBS.Container>
            );
        }
    }
}