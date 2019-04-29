import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  return (
    <div className="comment">
      <p><strong>Username:</strong> {props.username}</p>
      <p><strong>Text:</strong> {props.text}</p>
      <input type="text" placeholder="Add a comment.." />
    </div>
  )
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment;