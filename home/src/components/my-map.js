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
            return <RBS.Card style={{width: "45%", height: "30%" }}>
                <RBS.Card.Img variant="top" src="./images/aegir_god.jpeg" thumbnail/>
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
        }
        else if(this.state.score >= 100 && this.state.score < 200){
            return <RBS.Card style={{width: "45%", height: "30%" }}>
                <RBS.Card.Img variant="top" src="./images/Nephthys.jpeg" fluid/>
                <RBS.Card.Body>
                    <RBS.Card.Text>
                        Nephthys or Nebet-Het in ancient Egyptian (Greek: Νέφθυς) was a goddess in ancient Egyptian religion. A member of the 
                        Great Ennead of Heliopolis in Egyptian mythology, she was a daughter of Nut and Geb. Nephthys was typically paired 
                        with her sister Isis in funerary rites[1] because of their role as protectors of the mummy and the god Osiris and as 
                        the sister-wife of Set.

                        She was associated with mourning, the night/darkness, service (specifically temples), childbirth, the dead, 
                        protection, magic, health, embalming, and beer. 
                    </RBS.Card.Text>
                </RBS.Card.Body>
            </RBS.Card>
        }
    }

    renderElement(){
        if(sessionStorage.getItem('barleybrooKey') === null){
            return (
                <RBS.Card>
                    <RBS.Card.Title>YOU NEED TO BE SIGNED IN TO VIEW THIS CONTENT</RBS.Card.Title>
                    <RBS.Card.Img variant='bottom' src="./images/beer-god.jpg"></RBS.Card.Img>
                </RBS.Card>
            )


        }
        else{
            return (
                <RBS.Card>
                    <RBS.Card.Title>WELCOME TO YOUR JOURNEY</RBS.Card.Title>
                    <RBS.Card.Img variant='bottom' src="./images/beer-god.jpg"></RBS.Card.Img>
                </RBS.Card>
        
            )
        }
    }
    

    render(){
        if(localStorage.getItem("signedIn") !== false){
            return(
                    
                <RBS.Container>
                    <RBS.Row fluid>
                        <RBS.Col>
                                {this.renderElement()}
                        </RBS.Col>
                    </RBS.Row>
                    <RBS.Row fluid>
                        <RBS.Col>
                            <RBS.Card>
                                <RBS.Card.Title>{this.state.email}</RBS.Card.Title>
                                <RBS.Card.Body>
                                    SCORE: {this.state.score}
                                </RBS.Card.Body>
                            </RBS.Card>
                        </RBS.Col>
                        <RBS.Col>
                            {this.renderImg()}
                        </RBS.Col>
                    </RBS.Row>
                </RBS.Container>
            ); 
        }
        else{
            return(
                <RBS.Container >
                    <RBS.Row>
                        <RBS.Card>
                            {this.renderElement()}
                            <RBS.Card.Footer>Loading.....</RBS.Card.Footer>
                        <RBS.Card.Img variant='bottom' src="./images/beer-god.jpg"></RBS.Card.Img>
                        </RBS.Card>
                    </RBS.Row>
                </RBS.Container>
            );
        }
    }
}

