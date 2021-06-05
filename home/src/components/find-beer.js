import React from "react";
import "./find-beer.css";
import Youtube from "./youtube";

export class finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <button class="btn" id="btn"></button> */}
        <div class="youtube">
          <Youtube class="video" />
        </div>
      </div>
    );
  }
}
