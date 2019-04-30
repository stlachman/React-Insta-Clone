import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  onUpdate = event => {
    this.setState({[event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearchPosts(this.state.search);
    this.setState({ search: "" });
  }

  render() {
    return (
      <div className="searchbar">
        <div className="logo">
          <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a> <div className="divider"></div> <a href="https://www.instagram.com/">Instagram</a>
        </div>
        <div className="search-bar">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search" name="search" onChange={this.onUpdate} value={this.state.search} />
          </form>
        </div>
        <div className="user-info">
          <button className="user-icon"><i className="far fa-compass"></i></button>
          <button className="user-icon"><i className="far fa-heart"></i></button>
          <button className="user-icon"><i className="far fa-user"></i></button>
        </div>
      </div>
    )
  }
}

export default SearchBar;