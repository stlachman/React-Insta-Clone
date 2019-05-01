import React from 'react';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  handleSubmit = event => {
    this.login(this.state.username, this.state.password);
    this.setState({ username: "", password: ""});
  }
  
  login = (username, password) => {
    if (localStorage.getItem('username') !== "") {
      localStorage.setItem("username", username);
    } 
  }


  render() {
    return (
      <div className="login-form">
        <h2>Login To your Account</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="input-container">
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Enter Username"/>
          </div>
          <div className="input-container">
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter Password" />
          </div>
          <div className="form-button">
            <button>Login</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Login;