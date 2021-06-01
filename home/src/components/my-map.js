import React from 'react';
import * as RBS from 'react-bootstrap';


export class mymap extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        }
    }

    getToken = () => {
        let hold = localStorage.getItem("barleybrooKey");
        console.log(localStorage.getItem("barleybrooKey"))

        this.setState({
            token: hold
        })
        console.log("hold",hold)
        return "token";
    }
    

    render(){
        return(
            <RBS.Card>
                <RBS.Form>
                    <RBS.Button type="submit" variant="primary" onClick={this.getToken} >

                    </RBS.Button>

                </RBS.Form>
            </RBS.Card>
        );
    }



}