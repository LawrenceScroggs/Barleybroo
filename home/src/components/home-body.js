import React from 'react';
import * as RBS from 'react-bootstrap';
import './home-body.css';


export class home_body extends React.Component{
    render(){
        return(
            <RBS.Container className="cont-b" fluid>
                <RBS.Row className="back-ground">
                    <RBS.Col className="col-b">
                        <RBS.Card style={{ width: '40rem' }} bg="dark" text="white" >
                            <RBS.Card.Img style={{height: '25rem', width: '40rem'}} variant="top" src="./images/bes_god.jpeg" />
                                <RBS.Card.Body style={{width:'40rem'}}>
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
                    </RBS.Col>
                    <RBS.Col className="mp-20 text-center">
                        <div className="mx-auto">
                            <RBS.Button className="mx-auto" href="/Rate" variant="primary" size="lg">
                                FIND-BEER
                            </RBS.Button>{' '}
                        </div>
                    </RBS.Col>
                </RBS.Row>
            </RBS.Container>
        );
    }
}