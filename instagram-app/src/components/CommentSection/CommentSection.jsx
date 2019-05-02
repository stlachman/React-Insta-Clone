import React from 'react';
import Comment from './Comment';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`padding: 0.5rem 1rem 1.5rem;`;

const Paragraph = styled.p`font-size: 1.5rem; font-weight: 500;`;

const IconButton = styled.button`
	border: 0;
	font-size: 1.8rem;
	color: #272727;
	padding: 0;
	margin-right: 0.7rem;
	transition: 0.275s opacity ease-in;

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	&:focus {
		outline: none;
	}
`;

const Form = styled.form`padding: 1rem 0;`;

const Input = styled.input`
	border: 0;
	font-size: 1.4rem;
	color: #9f9999;
	resize: none;

	&:focus {
		outline: transparent;
	}
`;

class CommentSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
	}

	onUpdate = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onAddNewComment(this.state.input, this.props.id);
		this.setState({ input: '' });
	};

	handleClick = (event) => {
		this.props.onAddLike(this.props.id);
	};

	render() {
		return (
			<Container>
				<IconButton onClick={this.handleClick}>
					<i className="far fa-heart" />
				</IconButton>
				<IconButton className="comment-icon">
					<i className="far fa-comment fa-flip-horizontal	" />
				</IconButton>
				<Paragraph>{this.props.likes} likes</Paragraph>
				{this.props.comments.map((comment, i) => {
					return <Comment username={comment.username} text={comment.text} key={i} />;
				})}
				<Paragraph>{this.props.time}</Paragraph>
				<Form onSubmit={this.handleSubmit}>
					<Input
						type="text"
						placeholder="Add a comment.."
						name="input"
						value={this.state.input}
						onChange={this.onUpdate}
					/>
				</Form>
			</Container>
		);
	}
}

CommentSection.propTypes = {
	comments: PropTypes.array,
	likes: PropTypes.number,
	time: PropTypes.string
};

export default CommentSection;
