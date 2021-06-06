import React from 'react';
import * as RBS from 'react-bootstrap';
import './my-map.css'


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
    renderLvl(){
        if(this.state.score < 100 || this.state.score === ''){
            return <h1>AEGIRÆgir</h1>
        }
        else if(this.state.score >= 100 && this.state.score < 200){
            return <h1>NEPHTHYS</h1>
        }
        else if(this.state.score >= 200 && this.state.score < 300){
            return <h1>SIDURI</h1>
        }
        else if(this.state.score >= 300 && this.state.score < 400){
            return <h1>NINKASI</h1>
        }
        else if(this.state.score >= 400){
            return <h1>BEER ZUES</h1>
        }
    }
    renderImg(){
        if(this.state.score < 100 || this.state.score === ''){
            return (
                <RBS.Card className="pt-20" bg="dark" text="white">
                    <RBS.Card.Img variant="top" src="./images/aegir_god.jpeg" style={{height: '35rem'}}/>
                    <RBS.Card.Body>
                    <RBS.Card.Text>
                        Ægir (anglicised as Aegir; Old Norse 'sea'), Hlér (Old Norse 'sea'), or Gymir (Old Norse less clearly 'sea, engulfer'), 
                        is a jötunn and a personification of the sea in Norse mythology. In the Old Norse record, Ægir hosts the gods in his
                        halls and is associated with brewing ale. Ægir is attested as married to a goddess, Rán, who also personifies the sea,
                        and together the two produced daughters who personify waves, the Nine Daughters of Ægir and Rán, and Ægir's son is 
                        Snær, personified snow. Ægir may also be the father of the beautiful jötunn Gerðr, wife of the god Freyr, or these 
                        may be two separate figures who share the same name (see below and Gymir (father of Gerðr)).

                        One of Ægir's names, Hlér, is the namesake of the island Læsø *Old Norse Hléysey 'Hlér's island'* and perhaps also 
                        Lejre in Denmark. Scholars have long analyzed Ægir's role in the Old Norse corpus, and the concept of the figure 
                        has had some influence in modern popular culture. 
                    </RBS.Card.Text>
                    </RBS.Card.Body>
                </RBS.Card>
            )
        }
        else if(this.state.score >= 100 && this.state.score < 200){
            return (<RBS.Card className="pt-20" bg="dark" text="white">
                <RBS.Card.Img variant="top" src="./images/Nephthys.jpg" style={{height: '35rem'}}/>
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
            )
        }
        else if(this.state.score >= 200 && this.state.score < 300){
            return (<RBS.Card className="pt-20" bg="dark" text="white" thumbnail>
                <RBS.Card.Img variant="top" src="./images/siduri.jpeg" style={{height: '35rem'}}/>
                <RBS.Card.Body>
                    <RBS.Card.Text>
                        Siduri is a character in the Epic of Gilgamesh. She is an "alewife", a wise female divinity associated with 
                        fermentation (specifically beer[1] and wine[2]). 
                    </RBS.Card.Text>
                </RBS.Card.Body>
            </RBS.Card>
            )
        }
        else if(this.state.score >= 300 && this.state.score < 400){
            return (<RBS.Card className="pt-20" bg="dark" text="white">
                <RBS.Card.Img variant="top" src="./images/ninkasi2.jpeg" style={{height: '35rem'}}/>
                <RBS.Card.Body>
                    <RBS.Card.Text>
                    Ninkasi is the tutelary goddess of beer in ancient Sumerian religious mythology.  Her father was the 
                    King of Uruk, and her mother was the high priestess of the temple of Inanna, the goddess of 
                    procreation.[1] She is also one of the eight children created in order to heal one of the eight wounds
                    that Enki receives. Furthermore, she is the goddess of alcohol. She was also born of "sparkling fresh 
                    water".[2] She is the goddess made to "satisfy the desire" and "sate the heart." She would prepare the 
                    beverage daily. 
                    </RBS.Card.Text>
                </RBS.Card.Body>
            </RBS.Card>
            )
        }
        else if(this.state.score >= 400){
            return (<RBS.Card className="mp-20" bg="dark" text="white">
                <RBS.Card.Img variant="top" src="./images/Beer_Zues.jpg" style={{height: '35rem'}}/>
                <RBS.Card.Body>
                    <RBS.Card.Text>
                        You've done it!!!!  You are the ultimate beer reviewer.  The history books will remember the
                        names of those who have reached the peak of Mount Beer-Olympus.
                    </RBS.Card.Text>
                </RBS.Card.Body>
            </RBS.Card>
            )

        }
        
    }

    renderElement(){
        if(localStorage.getItem('barleybrooKey') === null){
            return (
                <RBS.Card className="header">
                    <RBS.Card.Title>
                        YOU NEED TO BE SIGNED IN TO VIEW THIS CONTENT
                    </RBS.Card.Title>
                    <RBS.Card.Img variant='bottom' src="./images/beer-god.jpg" style={{height: "15rem"}}></RBS.Card.Img>
                </RBS.Card>
            )


        }
        else{
            return (
                <RBS.Card className="header">
                    <RBS.Card.Title>
                        WELCOME TO YOUR JOURNEY
                    </RBS.Card.Title>
                    <RBS.Card.Img variant='bottom' src="./images/beer-god.jpg" style={{height: "15rem"}}></RBS.Card.Img>
                </RBS.Card>
        
            )
        }
    }
    getProg = () => {

        let prog = this.state.score;
        if(prog > 0 && prog < 100){
            prog = (prog / 100);
        }
        else if(prog >= 100 && prog < 200){
            prog = (prog / 200);
        }
        else if(prog >= 200 && prog < 300){
            prog = (prog / 300);
        }
        else if(prog >= 300 && prog < 400){
            prog = (prog / 400);
        }
        else{
            prog = (prog / 500);
        }
        prog = prog * 100;
        return prog;

    }
    

    render(){
        if(sessionStorage.getItem("signedIn") === 'true'){
            return(
                    
                <RBS.Container className="map-cntr" fluid>
                    <RBS.Row fluid>
                        <RBS.Col>
                                {this.renderElement()}
                        </RBS.Col>
                    </RBS.Row>
                    <RBS.Row>
                        <RBS.Col>
                            <RBS.Card className="user_info" bg="dark" text="white">
                                <RBS.Card.Title className="user">
                                    <h1>{this.state.email}</h1>
                                </RBS.Card.Title>
                                <RBS.Card.Body style={{height: "10rem"}}>
                                    SCORE: {this.state.score}
                                    <br></br>
                                <RBS.ProgressBar animated now={this.getProg()} />
                                    <br></br>
                                    PROGRESS TO NEXT LEVEL
                                </RBS.Card.Body>
                                <RBS.Card.Footer style={{height: "10rem"}}>
                                    LEVEL
                                    {this.renderLvl()}
                                </RBS.Card.Footer>
                            </RBS.Card>
                        </RBS.Col>
                        <RBS.Col>
                            <div className="img-hold">
                            {this.renderImg()}
                            </div>
                        </RBS.Col>
                    </RBS.Row>
                </RBS.Container>
            ); 
        }
        else{
            return(
                <RBS.Container>
                    <RBS.Row>
                        <RBS.Card className="top-card">
                            {this.renderElement()}
                            <RBS.Card.Footer>Loading.....</RBS.Card.Footer>
                        </RBS.Card>
                    </RBS.Row>
                </RBS.Container>
            );
        }
    }
}

