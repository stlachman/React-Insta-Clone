import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = props => {
  // console.log(props);
  return (
    <div className="post-container">
      {props.post.comments.map((comment, i) => <CommentSection comments={comment} key={i} />)}
    </div>
  )
};

export default PostContainer;