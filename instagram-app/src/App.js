import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage'

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
      <PostsPage />
		);
	}
}

export default App;
