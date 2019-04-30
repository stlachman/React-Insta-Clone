import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  render() {
    return (
      <div className="wrapper">
        <SearchBar />
        <div className="posts">
          {this.state.data.map(post => {
            return <PostContainer post={post} key={post.timestamp}/>
          })}
        </div>
      </div>
    )
   
  }
}

export default App;
