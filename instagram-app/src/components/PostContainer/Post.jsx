import React from 'react';
import PropTypes from 'prop-types';

const Post = props => {
  return (
    <div>
      <div className="post-information">
        <img src={props.thumbnail} alt=""/>
        <a href={`/${props.username}`}>{props.username}</a>
      </div>
      <img src={props.img} alt=""/>
    </div>
    
  )
};

Post.propTypes = {
  thumbnail: PropTypes.string,
  username: PropTypes.string,
  img: PropTypes.string
}

export default Post;