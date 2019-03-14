import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import styled from "styled-components"
import {
  changeRegisterPasswordField,
  changeRegisterEmailField,
  changeRegisterNameField,
  submitRegister
} from "./actions/Register"

const mapStateToProps = state => {
  return {
    registerPassword: state.Register.registerPassword,
    registerEmail: state.Register.registerEmail,
    registerName: state.Register.registerName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onChangeRegisterPasswordField: event =>
      dispatch(changeRegisterPasswordField(event.target.value)),
    onChangeRegisterEmailField: event =>
      dispatch(changeRegisterEmailField(event.target.value)),
    onChangeRegisterNameField: event =>
      dispatch(changeRegisterNameField(event.target.value)),

    onSubmitRegister: (registerEmail, registerPassword, registerName) =>
      dispatch(submitRegister(registerEmail, registerPassword, registerName))
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
    grid-column: 7;
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
  input.moreright {
    width: 200px;
    height: 20px;
    margin-right: 1em;
    grid-column: 5;
    grid-row: 5;
  }
`
class Register extends Component {
  render() {
    console.log(this.props.registerPassword)
    console.log(this.props.registerEmail)
    console.log(this.props.registerName)
    return (
      <LoginDiv>
        <h1>Login</h1>
        <h2>signInPassword</h2>
        <input
          onChange={this.props.onChangeRegisterPasswordField}
          type="text"
        />
        <h2 className="mail">signInEmail</h2>
        <input
          className="right"
          onChange={this.props.onChangeRegisterEmailField}
          type="text"
        />
        <input
          className="moreright"
          onChange={this.props.onChangeRegisterNameField}
          type="text"
        />
        <button
          onClick={() =>
            this.props.onSubmitRegister(
              this.props.registerEmail,
              this.props.registerPassword,
              this.props.registerName
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
  )(Register)
)
