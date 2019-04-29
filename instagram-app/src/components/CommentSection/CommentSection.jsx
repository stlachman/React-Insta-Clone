import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const CommentSection = (props) => {
  console.log(props);
	return (
    <>
    {props.comments.map((comment, i) => {
       return <Comment username={comment.username} text={comment.text} key={i}/>
    })}
    <input type="text" placeholder="Add a comment.." />
   </>
  )
};

CommentSection.propTypes = {
  comments: PropTypes.array
}


export default CommentSection;
