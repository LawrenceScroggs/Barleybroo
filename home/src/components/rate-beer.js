import React from "react";
import "./rate-beer.css";

const apiUrl = "https://api.punkapi.com/v2/beers";

export class ratebeer extends React.Component {
  constructor(props) {
    super(props);
    this.handleReview = this.handleReview.bind(this);
    this.review = React.createRef("review");
    this.rate = React.createRef("rate");
    this.state = {
      data: [],
      data2: {
        beer_id: '',
        beer_name: '',
        content: '',
        rating: ''
      }
    };
    this.handleReview = this.handleReview.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.review !== nextProps.review) {
      return false;
    }
    if (this.state.rate !== nextState.rate) {
      return false;
    }
    return true;
  }

  /*async getAPI() {
    await fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  }*/

  // fixed infinite loop
    componentDidMount(){
        fetch(apiUrl)
        .then(response => response.json())
        .then(json => {
            this.setState({
                data: json
              });
        });
    }
    // This needs work
    handleSubmit = (event) => {
        fetch("http://api.barleybroo.com/review/create",{
          method: "POST",
          headers: {
              'Content-Type' : 'application/json',
              'Authorization' : 'Bearer ' + localStorage.getItem('barleybrooKey')
          },
          body: JSON.stringify(this.state.data2)
        }).then(function(response) {
          console.log(response);
          return response.json();
        });
      event.preventDefault();
    }
  handleReview(event) {
    const inputs = event.target.getElementsByTagName("input");
    this.setState({
      data2: {
        content: inputs.review.value,
        rate: inputs.rate.value,
        beer_name: inputs.name.value,
        beer_id: '23'
      }
    });
    console.log(this.state.data2);
    localStorage.setItem("rev", inputs.review.value);
    localStorage.setItem("rat", inputs.rate.value);
    localStorage.setItem("nam", inputs.name.value);
  }

  render() {
//    this.getAPI();
    return (
      <div class="container">
        <div class="Rhalf">
          <h1>BEER</h1>
          <h2 class="left-side">
            {this.state.data.map((name) => (
              <li>
                {name.name}: {name.name}
              </li>
            ))}
          </h2>
        </div>
        <div class="Lhalf">
          <form onSubmit={(this.handleReview = this.handleReview.bind(this))}>
            <h1>Write Review</h1>
            <div class="review" id="review">
              <label for="txt">
                <br></br>
              </label>
              <textarea
                type="textbox"
                class="formControl"
                id="txt"
                name="review"
                ref={this.review}
                required
              ></textarea>
            </div>
            <h1>Rating</h1>
            <div class="rating">
              <label for="txt">
                <br></br>
              </label>
              <input
                value={this.state.rate}
                type="text"
                class="formControl"
                id="rate"
                height="250"
                name="rate"
                ref={this.rate}
                required
              ></input>
            </div>
            <h1>Beer Name</h1>
            <div class="rating">
              <label for="txt">
                <br></br>
              </label>
              <input
                value={this.state.rate}
                type="text"
                class="formControl"
                id="name"
                height="250"
                name="rate"
                ref={this.rate}
                required
              ></input>
            </div>
            <input type="submit" value="submit" onClick={this.handleSubmit} class="btn" id="btn"></input>
          </form>
          <div class="results">
            <h1>You're rating and review</h1>
            <div>Review: {localStorage.getItem("rev")}</div>
            <div>Rating: {localStorage.getItem("rat")}</div>
            <div>Name: {localStorage.getItem("nam")}</div>

          </div>
        </div>
      </div>
    );
  }
}

