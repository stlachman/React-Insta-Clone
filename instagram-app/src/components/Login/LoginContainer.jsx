import React from 'react';
import LoginForm from './LoginForm';

const LoginContainer = (props) => {
	return (
		<section className="login">
			<div className="login-form-container">
				<h2>Instagram</h2>
				<LoginForm
					username={props.username}
					password={props.password}
					onHandleChange={props.onHandleChange}
					onHandleSubmit={props.onHandleSubmit}
				/>
			</div>
		</section>
	);
};

export default LoginContainer;
