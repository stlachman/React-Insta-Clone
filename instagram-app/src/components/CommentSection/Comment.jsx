import React from 'react';

const Comment = props => {
  return (
    <div className="comment">
      <p><strong>Username:</strong> {props.username}</p>
      <p><strong>Text:</strong> {props.text}</p>
    </div>
  )
};

export default Comment;