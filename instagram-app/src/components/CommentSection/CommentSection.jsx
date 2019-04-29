import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
	return <Comment username={props.comments.username} text={props.comments.text} />;
};

CommentSection.propTypes = {
  comments: PropTypes.object
}


export default CommentSection;
