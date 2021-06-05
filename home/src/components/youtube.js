import React from "react";

const API_KEY = "AIzaSyC26HXeTSd-sW7Y72Gpdh2hvEV9yPY1FH8";//my api key that I requested during full stack term
const channelID = "UCk81V_1MwQLTBRaUVlBysoA";//last result of channel id videos printed
const result = 10;//amount of videos
// const date = new Date();
var finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=beerreview&type=video&key=AIzaSyC26HXeTSd-sW7Y72Gpdh2hvEV9yPY1FH8`
//`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelID=${channelID}&part=snippet,id&order=date&maxResults=${result}`;
//              https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channeLid}&part=snippet,id&order=date&maxResults=20


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
        console.log(json);
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
            Show
          </button>
          {this.state.result.map((link, i) => {
            // console.log(i + " " + link)
            var frame = (
              <p class="youtube" key={i}>
                <iframe
                  // key={i}
                  width="560"
                  height="315"
                  src={link}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </p>
            );
            return frame;
          })}
          {this.frame}
          <div></div>
        </div>
      </div>
    );
  }
}

export default Youtube;
