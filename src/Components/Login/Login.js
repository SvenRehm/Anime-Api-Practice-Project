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

const LoginDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(9, 90px);
  &::before {
    content: "";
    height: 90%;
    align-self: start;
    background: ${props => props.theme.primary};

    grid-row: 2 / span 7;
    grid-column: 5 / span 4;
    border: 1px solid ${props => props.theme.border};
  }
  label {
    grid-row: 3;
    grid-column: 5 / span 4;
    width: 70%;

    height: 2em;
    justify-self: center;
    align-self: end;

    color: ${props => props.theme.secondary};
    width: 80%;
    & #email {
      grid-row: 3;
    }
    &#password {
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
    background: ${props => props.theme.darkgrey};
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
  render() {
  
    return (
      <LoginDiv>
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
          onClick={() =>
            this.props.onSubmitLogin(
              this.props.signInEmail,
              this.props.signInPassword
            )
          }
        >
          Login
        </button>
      </LoginDiv>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
