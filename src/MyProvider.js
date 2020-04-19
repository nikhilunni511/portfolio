import React, { Component } from "react";
import MyContext from "./MyContext";

export class MyProvider extends Component {
  state = {
    showExplorer: false,
    update: this.update,
  };
  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
