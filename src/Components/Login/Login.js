import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import styled from "styled-components"
import {
  changePasswordField,
  changeEmailField,
  submitLogin,
 
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
  grid-template-rows: repeat(12, 100px);
  h2 {
    color: white;
    grid-row: 4;
  }
  h2.mail {
    color: white;
    grid-row: 4;
    grid-column: 3 / span 1;
  }
  button {
    grid-row: 5;
    grid-column: 4;
    height: 20px;
  }
  input {
    width: 200px;
    height: 20px;
    margin-right: 1em;
    grid-column: 1;
    grid-row: 5;
  }
  input.right {
    width: 200px;
    height: 20px;
    margin-right: 1em;
    grid-column: 3;
    grid-row: 5;
  }
`
class Login extends Component {
  render() {
    return (
      <LoginDiv>
        <h1>Login</h1>
        <h2>signInPassword</h2>
        <input onChange={this.props.onChangePasswordField} type="password" />
        <h2 className="mail">signInEmail</h2>
        <input
          className="right"
          onChange={this.props.onChangeEmailField}
          type="email"
        />
        <button
          onClick={() =>
            this.props.onSubmitLogin(
              this.props.signInEmail,
              this.props.signInPassword
            )
          }
        >
          submit
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
