import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
      <ComponentFromWithAuthenticate />
		);
	}
}

export default App;
