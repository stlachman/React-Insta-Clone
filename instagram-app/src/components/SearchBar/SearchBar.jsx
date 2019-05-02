import React from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #e6e6e6;
	margin: 2rem 0;
	padding: 0 0 2rem;
`;

const LogoContainer = styled.div`
	display: flex;
	align-items: center;
`;

const LogoLink = styled.a`
	font-size: 1.8rem;
	color: #272727;
	text-decoration: none;
`;

const Divider = styled.div`
  background: #262626;
  width: 1px;
  height: 20px;
  margin: 0 0.5rem;
  display: inline-block;
`;

const IconButton = styled.button`
  border: 0;
  padding: 0;
  margin: 0 1.5rem;
  font-size: 1.8rem;
  color: #2b2b2b;
  transition: 0.3s opacity ease-in;
  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  &:focus {
    outline: none;
  }

`;

const SearchInput = styled.input`
  border: 2px solid #dbdbdb;
  border-radius: 5px;
  padding: 0.5rem 0.8rem;
`;

class SearchBar extends React.Component {
	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	onUpdate = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.onSearchPosts(this.state.search);
		this.setState({ search: '' });
	};

	render() {
		return (
			<SearchBarContainer>
				<LogoContainer>
					<LogoLink href="https://www.instagram.com/">
						<i className="fab fa-instagram" />
					</LogoLink>{' '}
					<Divider></Divider> <LogoLink href="https://www.instagram.com/">Instagram</LogoLink>
				</LogoContainer>
				<div className="search-bar">
					<form onSubmit={this.handleSubmit}>
            <SearchInput type="text"
            placeholder="Search"
            name="search"
            onChange={this.onUpdate}
            value={this.state.search}></SearchInput>
					</form>
				</div>
				<div className="user-info">
					<IconButton>
						<i className="far fa-compass" />
          </IconButton>
					<IconButton>
						<i className="far fa-heart" />
          </IconButton>
					<IconButton>
						<i className="far fa-user" />
          </IconButton>
				</div>
			</SearchBarContainer>
		);
	}
}

export default SearchBar;
