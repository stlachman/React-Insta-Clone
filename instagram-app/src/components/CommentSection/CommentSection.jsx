import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';


class CommentSection extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="comment-container">
        <button className="comment-icon"><i className="far fa-heart"></i></button><button className="comment-icon"><i className="far fa-comment"></i></button>
        <p>{this.props.likes} likes</p>
        {this.props.comments.map((comment, i) => {
          return <Comment username={comment.username} text={comment.text} key={i}/>
        })}
        <p>{this.props.time}</p>
        <form className="comment-form" action="#" method="POST">
          <textarea className="comment-input" type="text" placeholder="Add a comment..">
          </ textarea>
        </form>
      </div>
    )
  }
}

CommentSection.propTypes = {
  comments: PropTypes.array,
  likes: PropTypes.number,
  time: PropTypes.string
}


export default CommentSection;
