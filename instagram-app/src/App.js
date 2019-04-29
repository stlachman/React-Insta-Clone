import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return (
      <div className="wrapper">
        <h2>Hello World</h2>
        <PostContainer posts={this.state.data} />
      </div>
    )
   
  }
}

export default App;
