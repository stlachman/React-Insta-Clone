import React from 'react';
import PropTypes from 'prop-types';
import './PostContainer.css';

const Post = props => {
  return (
    <>
      <div className="post-information">
        <img src={props.thumbnail} alt=""/>
        <a href={`/${props.username}`}>{props.username}</a>
      </div>
      <img className="featured-image" src={props.img} alt=""/>
    </>
    
  )
};

Post.propTypes = {
  thumbnail: PropTypes.string,
  username: PropTypes.string,
  img: PropTypes.string
}

export default Post;