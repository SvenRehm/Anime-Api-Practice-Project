import { history } from "../../../App"
import axios from "axios"

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

// submit(e) {
//   e.preventDefault();
//   axios.post('/getToken', {
//     email: this.state.email,
//     password: this.state.password
//   }).then(res => {
//     localStorage.setItem('cool-jwt', res.data);
//     this.props.history.push('/Protected');
//   });
// }
export const submitLogin = (loginEmail, loginPassword) => dispatch => {
  // fetch("http://localhost:5000/getToken", {
  //   method: "post",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     email: loginEmail,
  //     password: loginPassword
  //   })
  // })
  //   // .then(response => response.json())
  //   .then(data => {
  //     dispatch({
  //       type: "SUBMIT_LOGIN",

  //       token: data.data
  //     })
  //     // history.push("/")
  //   })
  axios
    .post("http://localhost:5000/getToken", {
      email: loginEmail,
      password: loginPassword
    })
    .then(res => {
      dispatch({
        type: "SUBMIT_LOGIN",
        token: res.data
      })
      // localStorage.setItem("cool-jwt", res.data)
      history.push("/")
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
