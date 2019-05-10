import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
	max-width: 200px;
	margin: 0 auto;
`;

const InputContainer = styled.div`margin: 1.5rem 0 0;`;

const Input = styled.input`
	padding: 0.8rem 0.5rem 0.8rem 0.6rem;
	font-size: 1.4rem;
  color: #262626;
	width: 100%;
	border: 1px solid #e6e6e6;
  transition: 0.275s border ease-in;
  font-weight: 500;

  &:focus {
    outline: none;
    border: 1px solid #c0c0c0;
  }
`;

const ButtonContainer = styled.div`margin: 1.5rem 0 0;`;

const FormButton = styled.button`
	padding: 0.6rem 2rem;
	background: #3896f0;
	border: 0;
	color: #fff;
	border-radius: 5px;
	font-size: 1.6rem;
	font-weight: bold;
	width: 100%;
	transition: 0.2s opacity ease-in;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`;

const LoginForm = (props) => {
	return (
		<Form onSubmit={props.onHandleSubmit}>
			<InputContainer>
				<Input
					type="text"
					name="username"
					value={props.username}
					onChange={props.onHandleChange}
					placeholder="Enter Username"
				/>
			</InputContainer>
			<InputContainer>
				<Input
					type="password"
					name="password"
					value={props.password}
					onChange={props.onHandleChange}
					placeholder="Enter Password"
				/>
			</InputContainer>
			<ButtonContainer>
				<FormButton>Log In</FormButton>
			</ButtonContainer>
		</Form>
	);
};

export default LoginForm;
