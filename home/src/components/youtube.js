import React from "react";

const API_KEY = "AIzaSyC26HXeTSd-sW7Y72Gpdh2hvEV9yPY1FH8";
const channelID = "UCXgGY0wkgozynnHvSEVmE3A";
const result = 10;
var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

export class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch(finalURL)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        // return json.movies;
        const result = json.items.map((obj) => obj.id.videoId);
        console.log(result);
        this.setState({ result });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    // console.log(finalURL);
    console.log(this.state.result);
    return (
      <div>
        <button class="btn" id="btn" onClick={this.handleClick}>
          Show Me Some Beer Content
        </button>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UhcJOnWQJXY"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
  }
}

export default Youtube;
