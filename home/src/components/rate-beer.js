import React from 'react';
import * as RBS from 'react-bootstrap';
//const url = "Access-Control-Allow-Origin: https://dsdlink.com/API?APICommand=LawrenceScroggs_ProductMasterData&APIToken=613d38ba76876ee69e2a73910417a060&Parameters=F:DSDLinkMasterProductID~V:702051~O:E";
const url2 = "https://api.punkapi.com/v2/beers/random";




export class rate_beer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            name: [],
            desc: []
        };
    }
    componentDidMount() {
        fetch(url2)
            .then((result) => result.json())
                .then((data) => {
                    this.setState({
                        name: data[0].name,
                        desc: data[0].description,
                        image: data[0].image_url
                    })
                        console.log("Data: ",data[0]);

                    });
                
            }

    render(){
        const { name, desc, image } = this.state;
        return(
            <RBS.Card>
                <RBS.Card.Img variant="top" src={image} style={{ height: "5%",width: "5%"}}/>
                <RBS.Card.Body>
                    <h2>BEER: {name} </h2>
                    <h3>Entries: {desc}</h3>

                </RBS.Card.Body>
            </RBS.Card>
        );
    }
}