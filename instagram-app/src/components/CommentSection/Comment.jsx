import React from 'react';

const Comment = props => {
  return (
    <div className="comment">
      <p><strong>Username:</strong> {props.comment.username}</p>
      <p><strong>Text:</strong> {props.comment.text}</p>
    </div>
  )
};

export default Comment;