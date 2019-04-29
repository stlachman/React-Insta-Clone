import React from 'react';
import Comment from './Comment';

const CommentSection = (props) => {
	return <Comment username={props.comments.username} text={props.comments.text} />;
};

export default CommentSection;
