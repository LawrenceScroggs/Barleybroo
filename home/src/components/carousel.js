import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const apiUrl = "https://api.punkapi.com/v2/beers";

export class slideShow extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      images: [],
    }
  }

  componentDidMount() {
    // // #1. First of all you have to fetch the images.
    // fetch('https://example.com/images-api-endpoint')
    //   .then(response => response.json()) // If it's a JSON response, you have to parse it firstly
    //   .then(images => this.setState({ images })) // #2. After that you have to keep the images in the component's state.

      fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          data: json,
        });
      });
  }

  render () {
    const { images } = this.state

    if (!images){
        return <div>Images are not fetched yet!</div>
    } 

    // #3. Finally, render the `<Carousel />` with the state's images.
    return <Carousel autoPlay infiniteLoop='true'>
      {
        images.map( obj => {
          return <div>
            <img src={ obj.image_url } />
            <p className="legend">{ obj.name }</p>
          </div>
        })
      }
    </Carousel>
  }
}