import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
  console.log(props);
  return (
    <div className="post-container">
      {props.posts.map(post => {
        return <CommentSection post={post} key={post.timestamp}/>
      })}
    </div>
  )
};

export default PostContainer;