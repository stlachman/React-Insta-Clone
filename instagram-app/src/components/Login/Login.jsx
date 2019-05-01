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
      <section className="login">
        <div className="login-form-container">
          <h2>Instagram</h2>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Enter Username"
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="button-container">
              <button className="form-button">Log In</button>
            </div>
          </form>
        </div>
      </section>
    )
  }

}

export default Login;