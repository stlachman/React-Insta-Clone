import React from 'react';
import PropTypes from 'prop-types';
import UserName from '../UserName/UserName';
import styled from 'styled-components';

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 0.5rem;
`;

const PostImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const PostThumbnail = styled.img`
  max-width: 30px;
  border-radius: 50%;
`;


const Post = props => {
  return (
    <>
      <PostHeader>
        <PostThumbnail src={props.thumbnail} alt={props.username} />
        <UserName href={`/${props.username}`}>{props.username}</UserName>
      </PostHeader>
      <PostImage src={props.img} alt="" />
    </>
    
  )
};

Post.propTypes = {
  thumbnail: PropTypes.string,
  username: PropTypes.string,
  img: PropTypes.string
}

export default Post;