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
		};
	}

	componentDidMount() {
		this.setState({
			data: dummyData,
			comments: dummyData.map((data) => data.comments)
		});
	}

	addNewComment = (input, id) => {
		this.setState({
			data: this.state.data.map(
				(post) =>
					post.id === id
						? { ...post, comments: [ ...post.comments, { text: input, username: 'Test User' } ] }
						: post
			)
		});
	};

	addLike = (id) => {
		this.setState({
			data: this.state.data.map((post) => (post.id === id ? { ...post, likes: post.likes + 1 } : post))
		});
  };
  
  searchPosts = (query) => {
    this.setState({
      data: this.state.data.filter((post) => (post.username === query))
    });
  }

	render() {
		return (
			<div className="wrapper">
				<SearchBar onSearchPosts={this.searchPosts} />
				<div className="posts">
					{this.state.data.map((post) => {
						return (
							<PostContainer
								onAddLike={this.addLike}
								onAddNewComment={this.addNewComment}
								post={post}
								key={post.id}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default App;
