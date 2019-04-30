import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';


class CommentSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  onUpdate = event => {
    this.setState({[event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAddNewComment(this.state.input, this.props.id);
    this.setState({ input: "" });
  };

  handleClick = event => {
    this.props.onAddLike(this.props.id);
  }

  render() {
    return (
      <div className="comment-container">
        <button className="comment-icon" onClick={this.handleClick}><i className="far fa-heart"></i></button><button className="comment-icon"><i className="far fa-comment"></i></button>
        <p>{this.props.likes} likes</p>
        {this.props.comments.map((comment, i) => {
          return <Comment username={comment.username} text={comment.text} key={i}/>
        })}
        <p>{this.props.time}</p>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input
            className="comment-input"
            type="text"
            placeholder="Add a comment.."
            name="input"
            value={this.state.input}
            onChange={this.onUpdate}
          />
          <button>Submit</button>
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
