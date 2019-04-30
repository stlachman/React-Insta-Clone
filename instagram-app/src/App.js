import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: []
    }
  }

  componentDidMount() {
    this.setState({
      data: dummyData
    })
  }

  addNewComment = (input, id) => {
    console.log(input);
    console.log(id);
    
  }

  render() {
    return (
      <div className="wrapper">
        <SearchBar />
        <div className="posts">
          {this.state.data.map(post => {
            return <PostContainer onAddNewComment={this.addNewComment} post={post} key={post.id}/>
          })}
        </div>
      </div>
    )
   
  }
}

export default App;
