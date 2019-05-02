import React from 'react';
import styled from 'styled-components';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';
import dummyData from '../../dummy-data';

const Wrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

const PostsWrapper = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

class PostsPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	componentDidMount() {
		this.setState({
			data: dummyData
		});
	}

	addNewComment = (input, id) => {
		this.setState({
			data: this.state.data.map(
				(post) =>
					post.id === id
						? {
								...post,
								comments: [
									...post.comments,
									{ text: input, username: localStorage.getItem('username') }
								]
							}
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
			data: this.state.data.filter((post) => post.username === query)
		});
	};

	render() {
		return (
			<Wrapper>
				<SearchBar onSearchPosts={this.searchPosts} />
				<PostsWrapper>
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
				</PostsWrapper>
			</Wrapper>
		);
	}
}

export default PostsPage;
