import { history } from "../../../App"
export const changeRegisterPasswordField = text => {
  return {
    type: "CHANGE_REGISTER_PASSWORD_FIELD",
    payload: text
  }
}
export const changeRegisterNameField = text => {
  return {
    type: "CHANGE_REGISTER_NAME_FIELD",
    payload: text
  }
}
export const changeRegisterEmailField = text => {
  return {
    type: "CHANGE_REGISTER_EMAIL_FIELD",
    payload: text
  }
}

export const submitRegister = (
  registerEmail,
  registerPassword,
  registerName
) => dispatch => {
  fetch("http://localhost:5000/register", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: registerName,
      email: registerEmail,
      password: registerPassword
    })
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: "SUBMIT_REGISTER",
        payload: data
      })
    })
  history.push("/")
}
