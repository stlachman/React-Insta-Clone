import React from 'react';
import LoginForm from './LoginForm';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin: 5rem auto 0;
  max-width: 350px;
  text-align: center;
  background: #fff;
  color: #262626;
  border: 1px solid #e6e6e6;
  padding: 0 0 4rem;
`;

const LoginContainer = (props) => {
	return (
		<section className="login">
			<FormContainer>
				<h2>Instagram</h2>
				<LoginForm
					username={props.username}
					password={props.password}
					onHandleChange={props.onHandleChange}
					onHandleSubmit={props.onHandleSubmit}
				/>
      </FormContainer>
		</section>
	);
};

export default LoginContainer;
