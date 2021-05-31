import React, { useState } from "react";
import "./rate-beer.css";

const apiUrl = "https://api.punkapi.com/v2/beers";

export class ratebeer extends React.Component {
  constructor(props) {
    super(props);
    this.handleReview = this.handleReview.bind(this);
    this.review = React.createRef("review");
    this.rate = React.createRef("rate");
    git;
    this.state = {
      data: [],
      // rate: 'rating',
      // review: 'review',
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

  async getAPI() {
    const { data } = this.state;
    await fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => this.setState({ data: json }));
  }

  handleReview(event) {
    const inputs = event.target.getElementsByTagName("input");
    this.setState({
      review: inputs.review.value,
      rate: inputs.rate.value,
    });
    localStorage.setItem("rev", inputs.review.value);
    localStorage.setItem("rat", inputs.rate.value);
    
  }

  render() {
    this.getAPI();
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
            <div class="review">
              <label for="txt">
                <br></br>
              </label>
              <input
                type="text"
                class="formControl"
                id="txt"
                height="250"
                name="review"
                ref={this.review}
                required
              ></input>
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
            <input type="submit" value="Submit" class="btn" id="btn"></input>
          </form>
          <div class="results">
            <h1>You're rating and review</h1>
            <div>Review: {localStorage.getItem("rev")}</div>
            <div>Rating: {localStorage.getItem("rat")}</div>
          </div>
        </div>
      </div>
    );
  }
}
