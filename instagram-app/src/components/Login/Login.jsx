import React from 'react';
import './Login.css';
import LoginContainer from './LoginContainer';

class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			username: '',
			password: ''
		};
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		this.login(this.state.username, this.state.password);
		this.setState({ username: '', password: '' });
	};

	login = (username, password) => {
		if (localStorage.getItem('username') !== '') {
			localStorage.setItem('username', username);
		}
	};

	render() {
		return (
			<LoginContainer
				username={this.state.username}
				password={this.state.password}
				onHandleChange={this.handleChange}
				onHandleSubmit={this.handleSubmit}
			/>
		);
	}
}

export default Login;
