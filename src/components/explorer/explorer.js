import React, { Component } from "react";
import "./explorer.css";
import { MainWindow } from "./mainWindow";
import MyContext from "../../MyContext";

class FileExplorer extends Component {
  state = {
    home: {
      li: "",
      ul: "none",
    },
    explorer:
      "window window--explorer ui-resizable ui-draggable window--active explore",
      folderName: ''
  };

  homeHandler = () => {
    this.setState({
      home: {
        li: this.state.home.li ? "" : "side__list--open",
        ul: this.state.home.ul === "none" ? "block" : "none",
      },
    });
  };

  exploreHandler = () => {
    this.setState({
      explorer: this.state.explorer.includes("window--minimized")
        ? "window window--explorer ui-resizable ui-draggable window--active explore"
        : "window window--explorer ui-resizable ui-draggable window--active window--minimized",
    });
  };

  maximizeHandler = () => {
    this.setState({
      explorer: this.state.explorer.includes("window--maximized")
        ? "window window--explorer ui-resizable ui-draggable window--active explore"
        : "window window--explorer ui-resizable ui-draggable window--active window--maximized span-explore",
    });
  };
componentWillReceiveProps(){
  console.log('test')
  this.setState({
    explorer:
    "window window--explorer ui-resizable ui-draggable window--active explore",
    folderName: this.props.folderName
  })
}
  
  render() {
    

    return (
      <div className={this.state.explorer} data-window="explorer">
        <div className="window__titlebar ui-draggable-handle">
          <div className="window__controls window__controls--left">
            <a className="window__icon" href="#">
              <i className="fa fa-folder"></i>
            </a>
            <a className="window__menutoggle" href="#">
              <i className="fa fa-bars"></i>
            </a>
          </div>
          <span className="window__title">File Explorer</span>
          <div className="window__controls window__controls--right">
            <a
              className="window__minimize"
              href="#"
              onClick={this.exploreHandler}
            >
              <i className="fa fa-minus"></i>
            </a>
            <a
              className="window__maximize"
              href="#"
              onClick={this.maximizeHandler}
            >
              <i className="fa"></i>
            </a>
            <a className="window__close" href="#">
              <i className="fa fa-close"></i>
            </a>
          </div>
        </div>
        <ul className="window__menu">
          <li>
            <a href="#">
              <i className="menu__icon fa fa-search"></i>
              Search
            </a>
          </li>
          <li>
            <a href="#">
              <i className="menu__icon fa fa-share-alt"></i>
              Share
            </a>
          </li>
          <li>
            <a href="#">
              <i className="menu__icon fa fa-plug"></i>
              Devices
            </a>
          </li>
          <li className="divided">
            <a href="#">
              <i className="menu__icon fa fa-cog"></i>
              Settings
            </a>
          </li>
        </ul>
        <div className="window__actions">
          <a className="window__back" href="#">
            <i className="fa fa-arrow-left"></i>
          </a>
          <a className="window__forward" href="#">
            <i className="fa fa-arrow-right"></i>
          </a>
          {/* <div className="window__path">
            <a href="#">
              <i className="fa fa-desktop"></i>
Desktop
</a>
          </div> */}
          <form className="search">
            <input
              type="text"
              className="search__input"
              placeholder="Search files and folders"
            />
            <button className="search__btn"></button>
          </form>
        </div>
        <div className="window__body">
          <div className="window__side">
            <ul className="side__list">
              <li className={this.state.home.li}>
                <a href="#" onClick={this.homeHandler}>
                  Home<span className="list__toggle"></span>
                </a>
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
              </li>
            </ul>
          </div>
          <MainWindow />
        </div>
      </div>
    );
  }
}

export class Explorer extends Component {
  render() {
    return this.props.showExplorer.showExplorer ?
      <FileExplorer showExplorer={this.props} /> : null;
  }
}
