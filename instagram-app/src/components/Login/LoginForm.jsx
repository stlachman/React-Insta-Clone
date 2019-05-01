import React from 'react';

const LoginForm = props => {
  return (
    <form className="login-form" onSubmit={props.onHandleSubmit}>
      <div className="input-container">
        <input
          type="text"
          name="username"
          value={props.username}
          onChange={props.onHandleChange}
          placeholder="Enter Username"
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          name="password"
          value={props.password}
          onChange={props.onHandleChange}
          placeholder="Enter Password"
        />
      </div>
      <div className="button-container">
        <button className="form-button">Log In</button>
      </div>
    </form>
  );
};

export default LoginForm;