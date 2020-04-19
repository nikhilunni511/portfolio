import React, { Component } from "react";
import DragAbout from "./folders/dragAbout";
const arr = [
  "Career Summary",
  "Skills",
  "Certifications",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];


export class Desktop extends Component {
  state = {
    style: "mydesktop",
  };

  spanArea = (e) => {
    if (e.currentTarget.className !== "mydesktop-span")
      this.setState({ style: "mydesktop-span" });
  };

  render() {
    const makeDiv = arr.map((item, index) => (
      <DragAbout key={index} folderName={item} state={this.props} />
    ));
    return (
      <div className={this.state.style} onClick={this.spanArea}>
        {/* <About/> */}
        {makeDiv}
      </div>
    );
  }
}
