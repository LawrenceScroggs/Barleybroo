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
                        desc: data[0].description
                    })
                        console.log("Data: ",data[0]);

                    });
                
            }

    render(){
        const { name, desc } = this.state;
        return(
            <RBS.Card>
                <ul>
                    <h2>BEER: {name} </h2>
                    <h3>Entries: {desc}</h3>
                </ul>
            </RBS.Card>
        );
    }
}