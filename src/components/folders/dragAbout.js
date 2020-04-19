import React from "react";
import Draggable from "react-draggable";
import "./folder.scss";
import MyContext from "../../MyContext";

export default class DragAbout extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
    showExplorer: false
  };

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  handleDoubleClick = (e,state) => {
    console.log(e.currentTarget.id)
    e.preventDefault()
    state.showExplorer.updateState(true, e.currentTarget.id)
    this.setState({showExplorer: true})
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    // const { deltaPosition, controlledPosition } = this.state;
    return (
    
          <Draggable bounds="parent" {...dragHandlers}>
            <div
              className="folder" id={this.props.folderName}
              onClick={(e) => this.handleDoubleClick(e, this.props.state)}
            >
              <i
                className="material-icons"
                style={{ fontSize: "48px", color: "#F8D775" }}
              >
                folder
              </i>
              <span className="folderName">{this.props.folderName}</span>
            </div>
          </Draggable>
      //   <Draggable bounds="parent" {...dragHandlers}>
      //   <div className="box">
      //     I can only be moved within my offsetParent.<br /><br />
      //     Both parent padding and child margin work properly.
      //   </div>
      // </Draggable>
    );
  }
}
