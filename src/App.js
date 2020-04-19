import React from "react";
import "./App.css";
import { Desktop } from "./components/main";
import { Explorer } from "./components/explorer/explorer";
import { MyProvider } from "./MyProvider";

export default class App extends React.Component {

  update = (enable, folderName) => {
    this.setState({showExplorer: enable, folder: folderName})
  }
  state={
    showExplorer: false,
    folder: '',
    updateState: this.update
  }
  
  render() {
    return (
        <div className="App" id="portfolio">
          <Desktop showExplorer = {this.state}/>
          <Explorer showExplorer = {this.state}/>
        </div>
    );
  }
}

// const App = () => {
//   return (
//     <MyProvider>
//       <div className="App" id="portfolio">
//         <Desktop />
//         <Explorer />
//       </div>
//     </MyProvider>
//   );
// };

// export default App;
