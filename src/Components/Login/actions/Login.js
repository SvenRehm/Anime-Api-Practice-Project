import { history } from "../../../App"
import axios from "axios"
import { getJwt } from "../../helpers/jwt"
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
  axios
    .post("http://localhost:5000/getToken", {
      email: loginEmail,
      password: loginPassword
    })
    .then(res => {
      dispatch({
        type: "SUBMIT_LOGIN",
        payload: res.data
      })
      dispatch(Authenticate(res.data))
      localStorage.setItem("cool-jwt", res.data)
      history.push("/")
    })
}
export const Authenticate = jwt => dispatch => {
  axios
    .get("http://localhost:5000/getUser", {
      headers: { Authorization: `Bearer ${jwt}` }
    })
    .then(res => {
      dispatch({
        type: "AUTHENTICATE",
        payload: res.data
      })
    })
    .catch(err => {
      localStorage.removeItem("cool-jwt")
      history.push("/Login")
    })
}

export const loginAddToPlaylist = (id, animeid) => dispatch => {
  axios
    .put("http://localhost:5000/addplaylist", {
      id: id,
      animeid: animeid
    })
    .then(res => {
      dispatch({
        type: "LOGIN_ADD_TO_PLAYLIST",
        payload: animeid
      })
    })
}

export const loginRemoveFromePlaylist = (id, animeid) => dispatch => {
  const jwt = getJwt()
  axios
    .delete("http://localhost:5000/removefromplaylist", {
      data: { id: id, animeid: animeid }
    })
    .then(res => {
      dispatch({
        type: "DELETE_FROM_PLAYLIST",
        payload: animeid
      })
      dispatch(Authenticate(jwt))
    })
}
// export const loginRemoveFromePlaylist = (id, animeid) => dispatch => {
//   axios
//     .delete("http://localhost:5000/removefromplaylist", {
//       id: id,
//       animeid: animeid
//     })
//     .then(res => {
//       dispatch({
//         type: "DELETE_FROM_PLAYLIST",
//         payload: res
//       })
//     })
// }

export const Logout = () => dispatch => {
  dispatch({
    type: "LOGOUT"
  })
  localStorage.removeItem("cool-jwt")
  history.push("/")
}
