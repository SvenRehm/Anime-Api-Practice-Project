export const changePasswordField = text => {
  return {
    type: "CHANGE_PASSWORD_FIELD",
    payload: text
  }
}
export const changeEmailField = text => {
  return {
    type: "CHANGE_EMAIL_FIELD",
    payload: text
  }
}

export const submitLogin = (
  registerEmail,
  registerPassword,
  registerName
) => dispatch => {
  fetch("http://localhost:3001/register", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: registerName,
      email: registerEmail,
      password: registerPassword
    })
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: "SUBMIT_LOGIN",
        payload: data
      })
    })
}
