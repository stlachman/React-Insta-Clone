import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserName from '../UserName/UserName';

const Paragraph = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
`;

const Comment = props => {
  return (
    <div>
      <Paragraph><UserName style={ {marginLeft: 0} } href={`/${props.username}`}>{props.username}</UserName> {props.text}</Paragraph>
    </div>
  )
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment;