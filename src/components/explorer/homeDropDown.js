import React, { Component } from "react";

export class HomeDropDown extends Component {
  render() {
    return (
      <ul style={{ display: this.state.home.ul }}>
        <li>
          <a href="#">Desktop</a>
        </li>
        <li>
          <a href="#">Downloads</a>
        </li>
        <li>
          <a href="#">Recent Places</a>
        </li>
      </ul>
    );
  }
}
