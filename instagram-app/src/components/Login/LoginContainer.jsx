import React from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import logo from '../../img/Instagram_logo.svg';

const FormContainer = styled.div`
	margin: 5rem auto 0;
	max-width: 350px;
	text-align: center;
	background: #fff;
	color: #262626;
	border: 1px solid #e6e6e6;
	padding: 0 0 4rem;
`;

const FormTitle = styled.h1`
`;

const FormImg = styled.img`
  max-width: 200px;
`;

const LoginContainer = (props) => {
	return (
		<FormContainer>
			<FormTitle><FormImg src={logo} /></FormTitle>
			<LoginForm
				username={props.username}
				password={props.password}
				onHandleChange={props.onHandleChange}
				onHandleSubmit={props.onHandleSubmit}
			/>
		</FormContainer>
	);
};

export default LoginContainer;
