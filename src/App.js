import React from 'react';
import './App.css';
// import {About} from './components/folders/About'
import DragAbout from './components/folders/dragAbout';

function App() {
  return (
    <div className="App">
      <div className="desktop">
        {/* <About/> */}
        <DragAbout folderName="Home"/>
        <DragAbout folderName="About"/>
      </div>
    </div>
  );
}

export default App;
