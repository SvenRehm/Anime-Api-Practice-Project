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

const RegisterStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(8, 90px);
  label {
    grid-row: 3;
    grid-column: 5 / span 4;
    width: 70%;

    height: 2em;
    justify-self: center;
    align-self: end;

    color: ${props => props.theme.secondary};
    width: 80%;
    & #username {
      grid-row: 3;
    }
    &#password {
      grid-row: 5;
    }

    &#email {
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

  input[name="RegisterName"] {
    grid-row: 4;

    grid-column: 5 / span 4;
  }
  input[name="RegisterPassword"] {
    grid-row: 6;

    grid-column: 5 / span 4;
  }
  input[name="RegisterEmail"] {
    grid-row: 5;

    grid-column: 5 / span 4;
  }
  h1 {
    text-align: center;
    grid-column: 5 / span 4;
    grid-row: 2;
    color: ${props => props.theme.secondary};
  }
  button {
    grid-row: 7;
  }
`
class Register extends Component {
  render() {
    const { regiterPassword, registerEmail, registerName } = this.props
    return (
      <RegisterStyles>
        <h1>Register</h1>
        <label id="username">Username</label>
        <input
          placeholder="Username"
          onChange={this.props.onChangeRegisterNameField}
          type="text"
          name="RegisterName"
          value={registerName}
        />

        <label id="email">Email</label>
        <input
          placeholder="Email exm. abc@gmail.com"
          onChange={this.props.onChangeRegisterEmailField}
          type="email"
          name="RegisterEmail"
          value={registerEmail}
        />
        <label id="password">Password</label>
        <input
          placeholder="Password"
          onChange={this.props.onChangeRegisterPasswordField}
          type="password"
          name="RegisterPassword"
          value={regiterPassword}
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
      </RegisterStyles>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
)
