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
      registerName: state.Register.registerName,
      message: state.Register.message
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

const RegisterForm = styled.form`
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
   p {
      grid-row: 3;

      grid-column: 5 / span 4;

      justify-self: center;
      align-self: start;
      color: ${props => props.theme.secondary};
   }
   label {
      grid-row: 3;
      grid-column: 5 / span 4;
      width: 70%;

      height: 2em;
      justify-self: center;
      align-self: end;

      color: ${props => props.theme.primary_text};
      width: 70%;
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
      width: 70%;
      border: none;
      color: ${props => props.theme.primary};
      background: ${props => props.theme.primary_dark};
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
      justify-self: center;

      align-self: center;
      line-height: 1.2;
      letter-spacing: 0.2px;
      text-align: left;
      font-size: 2.5em;
      grid-column: 5 / span 4;
      grid-row: 2;
      color: ${props => props.theme.primary_text};
   }
   button {
      grid-row: 7;
      grid-column: 5 / span 4;
      width: 160px;
      height: 50px;
      color: ${props => props.theme.primary_text};
      text-transform: uppercase;
      background-color: ${props => props.theme.secondary};
      border: 1px solid ${props => props.theme.primary_light};
      justify-self: center;
      cursor: pointer;
   }
`
class Register extends Component {
   handleSubmit = event => {
      event.preventDefault()
      this.props.onSubmitRegister(
         this.props.registerEmail,
         this.props.registerPassword,
         this.props.registerName
      )
   }
   render() {
      const { registerPassword, registerEmail, registerName } = this.props
      return (
         <RegisterForm onSubmit={this.handleSubmit}>
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
               value={registerPassword}
            />
            <button
               type="submit"
               value="Register"
               // onClick={() =>
               //   this.props.onSubmitRegister(
               //     this.props.registerEmail,
               //     this.props.registerPassword,
               //     this.props.registerName
               //   )
               // }
            >
               Register
            </button>
         </RegisterForm>
      )
   }
}

export default withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )(Register)
)
