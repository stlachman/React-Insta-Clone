import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import Post from './Post';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #eee;
  margin: 0 0 3rem;
  max-width: 600px;
`;

const PostContainer = props => {
  return (
    <Container>
      <Post thumbnail={props.post.thumbnailUrl} img={props.post.imageUrl} username={props.post.username} />
      <CommentSection onAddLike={props.onAddLike} onAddNewComment={props.onAddNewComment} id={props.post.id} likes={props.post.likes} time={props.post.timestamp} comments={props.post.comments} />
    </Container>
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