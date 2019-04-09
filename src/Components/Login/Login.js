import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import styled from "styled-components"
import {
  changePasswordField,
  changeEmailField,
  submitLogin
} from "./actions/Login"

const mapStateToProps = state => {
  return {
    signInPassword: state.Login.signInPassword,
    signInEmail: state.Login.signInEmail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangePasswordField: event =>
      dispatch(changePasswordField(event.target.value)),
    onChangeEmailField: event => dispatch(changeEmailField(event.target.value)),
    onSubmitLogin: (signInEmail, signInPassword) =>
      dispatch(submitLogin(signInEmail, signInPassword))
  }
}

const LoginForm = styled.form`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(9, 90px);
  &::before {
    content: "";
    height: 80%;
    align-self: start;
    background: ${props => props.theme.primary};

    grid-row: 2 / span 7;
    grid-column: 5 / span 4;
    border: 1px solid ${props => props.theme.border};
  }
  label {
    grid-row: 3;
    grid-column: 5 / span 4;

    height: 2em;
    line-height: 1.2;
    letter-spacing: 0.2px;
    text-align: left;
    justify-self: center;
    align-self: end;

    color: ${props => props.theme.secondary};
    width: 80%;
    & #email {
      line-height: 1.2;
      letter-spacing: 0.2px;
      text-align: left;
      grid-row: 3;
    }
    &#password {
      line-height: 1.2;
      letter-spacing: 0.2px;
      text-align: left;
      grid-row: 4;
    }
  }
  input {
    padding: 6px;
    justify-self: center;
    height: 2em;
    font-size: 17px;
    width: 80%;
    border: none;
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.background};
  }

  input[name="email"] {
    grid-row: 4;
    grid-column: 5 / span 4;
  }
  input[name="password"] {
    grid-row: 5;
    grid-column: 5 / span 4;
  }

  h1 {
    justify-self: center;
    align-self: center;
    grid-column: 5 / span 4;
    grid-row: 2;
    color: ${props => props.theme.secondary};
    line-height: 1.2;
    letter-spacing: 0.2px;
    text-align: left;
    font-size: 2.5em;
  }
  button {
    grid-row: 6;
    grid-column: 5 / span 4;
    width: 160px;
    height: 50px;
    color: ${props => props.theme.secondary};
    text-transform: uppercase;
    background-color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.secondary};
    justify-self: center;
  }
`

class Login extends Component {
  handleSubmit = event => {
    event.preventDefault()
    this.props.onSubmitLogin(this.props.signInEmail, this.props.signInPassword)

  }
  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <label id="email">Email</label>
        <input
          placeholder="Email exm. abc@gmail.com"
          name="email"
          value={this.props.signInEmail}
          onChange={this.props.onChangeEmailField}
          type="email"
        />
        <label id="password">Password</label>
        <input
          placeholder="Password"
          onChange={this.props.onChangePasswordField}
          type="password"
          name="password"
          value={this.props.signInPassword}
        />

        <button
          type="submit"
          value="Login"
          // onClick={() =>
          //   this.props.onSubmitLogin(
          //     this.props.signInEmail,
          //     this.props.signInPassword
          //   )
          // }
        >
          Login
        </button>
      </LoginForm>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
