import React from 'react';
import Comment from './Comment';

const CommentSection = props => {
  return (
    <div>
     {props.comments.map((comment, i) => {
       return <Comment comment={comment} key={i} />
     })}
    </div>
  )
};

export default CommentSection;