import React from 'react';
import './App.css';
import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="wrapper">
        <h2>Hello World</h2>
      </div>
    )
   
  }
}

export default App;
