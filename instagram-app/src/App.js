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
        <h2>Welcome to Instagram</h2>
        {this.state.data.map(post => {
          return <PostContainer post={post} key={post.timestamp}/>
        })}
      </div>
    )
   
  }
}

export default App;
