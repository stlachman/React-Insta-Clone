import React from 'react';
import './SearchBar.css';

const SearchBar = props => {
  return (
    <div className="searchbar">
      <div className="logo">
        <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a> | <a href="https://www.instagram.com/">Instagram</a>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-info">
        <button className="user-icon"><i className="far fa-compass"></i></button>
        <button className="user-icon"><i className="far fa-heart"></i></button>
        <button className="user-icon"><i className="far fa-user"></i></button>
      </div>
    </div>
  )
};

export default SearchBar;