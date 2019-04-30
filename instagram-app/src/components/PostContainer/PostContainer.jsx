import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';
import './PostContainer.css';
import PropTypes from 'prop-types';

const PostContainer = props => {
  return (
    <div className="post-container">
      <Post thumbnail={props.post.thumbnailUrl} img={props.post.imageUrl} username={props.post.username} />
      <CommentSection onAddLike={props.onAddLike} onAddNewComment={props.onAddNewComment} id={props.post.id} likes={props.post.likes} time={props.post.timestamp} comments={props.post.comments} />
    </div>
  )
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    username: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.array
  })
}

export default PostContainer;