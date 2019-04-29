import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
  return (
    <div className="post-container">
      {props.posts.map(post => {
        return <CommentSection comments={post.comments} key={post.timestamp}/>
      })}
    </div>
  )
};

export default PostContainer;