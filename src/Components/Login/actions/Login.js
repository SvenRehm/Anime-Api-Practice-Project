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

export const submitLogin = (loginEmail, loginPassword) => dispatch => {
  fetch("http://localhost:3001/signin", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: loginEmail,
      password: loginPassword
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

export const loginAddToPlaylist = (id, animeid) => dispatch => {
  fetch("http://localhost:3001/addplaylist", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      animeid: animeid
    })
  })
    .then(response => response.json())
    .then(animeid => {
      dispatch({
        type: "LOGIN_ADD_TO_PLAYLIST",
        payload: animeid
      })
    })
}
