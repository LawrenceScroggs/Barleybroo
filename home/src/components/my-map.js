import React from 'react';
import * as RBS from 'react-bootstrap';


export class mymap extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email: '',
            score: '',
            join_date: '',
            first_name: '',
            last_name: '',
            isLoaded: false
        };
    }
    componentDidMount(){
        fetch('http://api.barleybroo.com/account/userinfo', {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer ' + localStorage.getItem('barleybrooKey')
            },
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                email: data.email,
                score: data.score,
                join_date: data.join_date,
                first_name: data.first_name,
                last_name: data.last_name,
                isLoaded: true
              });
        });
    }
    renderImg(){
        if(this.state.score < 100){
            return <RBS.Container fluid>
            <RBS.Card style={{width: "15rem", height: "15rem" }}>
                <RBS.Card.Img variant="top" src="./images/aegir_god.jpeg"/>
                <RBS.Card.Body>
                    <RBS.Card.Text>
                        Ægir (anglicised as Aegir; Old Norse 'sea'), Hlér (Old Norse 'sea'), or Gymir (Old Norse less clearly 'sea, engulfer'), 
                        is a jötunn and a personification of the sea in Norse mythology. In the Old Norse record, Ægir hosts the gods in his
                        halls and is associated with brewing ale. Ægir is attested as married to a goddess, Rán, who also personifies the sea,
                        and together the two produced daughters who personify waves, the Nine Daughters of Ægir and Rán, and Ægir's son is 
                        Snær, personified snow. Ægir may also be the father of the beautiful jötunn Gerðr, wife of the god Freyr, or these 
                        may be two separate figures who share the same name (see below and Gymir (father of Gerðr)).

                        One of Ægir's names, Hlér, is the namesake of the island Læsø (Old Norse Hléysey 'Hlér's island') and perhaps also 
                        Lejre in Denmark. Scholars have long analyzed Ægir's role in the Old Norse corpus, and the concept of the figure 
                        has had some influence in modern popular culture. 
                    </RBS.Card.Text>
                </RBS.Card.Body>
            </RBS.Card>
            </RBS.Container>
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
        if(localStorage.getItem("barleybrooKey") != null){
            return(
                <RBS.Container fluid>
                    {this.renderElement()}
                    <RBS.Card.Img variant='top' src="./images/beer-god.jpg"></RBS.Card.Img>
                    <div>{this.state.email}</div>
                    <div>{this.state.score}</div>
                    {this.renderImg()}
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