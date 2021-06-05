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
        const result = json.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        console.log(result);
        this.setState({ result });
        console.log("this " + this.state.result);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    // console.log(finalURL);
    console.log("this state " + this.state.result);
    return (
      <div>
        <div>
          <button class="btn" id="btn" onClick={this.handleClick}>
            Show Me Some Beer Content
          </button>
          {
            this.state.result.map((link, i) => {
              // console.log(i + " " + link)
              let var = <div class="youtube"><iframe width="560" height="315" src="https://www.youtube.com/embed/UhcJOnWQJXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            })
            this.state.var;
          }
          <div>
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;
