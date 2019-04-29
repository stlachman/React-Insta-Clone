import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <div className="post-container">
      <Post thumbnail={props.post.thumbnailUrl} img={props.post.imageUrl} username={props.post.username} />
      {props.post.comments.map((comment, i) => <CommentSection comments={comment} key={i} />)}
    </div>
  )
};

PostContainer.propTypes = {
  post: PropTypes.object
}

export default PostContainer;