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

const api = "http://localhost:5000"

export const submitLogin = (loginEmail, loginPassword) => dispatch => {
   axios
      .post(`${api}/getToken`, {
         email: loginEmail,
         password: loginPassword
      })
      .then(res => {
         dispatch({
            type: "SUBMIT_LOGIN",
            payload: res.data,
            message: res.data.message
         })

         dispatch(Authenticate(res.data))
         dispatch(getAnimelist(res.data))
         localStorage.setItem("cool-jwt", res.data)
         // history.push("/")
         history.goBack()
      })
      .catch(error => dispatch({ type: "SUBMIT_LOGIN_FAILED", payload: error }))
}
export const Authenticate = jwt => dispatch => {
   axios
      .get(`${api}/getUser`, {
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

export const getAnimelist = jwt => dispatch => {
   axios
      .get(`${api}/animelist`, {
         headers: { Authorization: `Bearer ${jwt}` }
      })
      .then(res => {
         const animelistIDS = res.data.map((animeid, i) => {
            return animeid.anime_id
         })
         dispatch({
            type: "GET_ANIMELIST",
            payload: res.data,
            anime_id: animelistIDS
         })
      })
      .catch(err => {
         localStorage.removeItem("cool-jwt")
         history.push("/Login")
      })
}

export const reloadUser = jwt => dispatch => {
   axios
      .get(`${api}/getUser`, {
         headers: { Authorization: `Bearer ${jwt}` }
      })
      .then(res => {
         dispatch({
            type: "REALOAD_USER",
            payload: res.data
         })
      })
      .catch(err => {
         localStorage.removeItem("cool-jwt")
      })
}

export const loginAddToPlaylist = (id, animeid) => dispatch => {
   axios
      .put(`${api}/addplaylist`, {
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

export const loginAddToPlaylist2 = (id, animeid) => dispatch => {
   console.log(animeid)
   axios
      .put(`${api}/addplaylist`, {
         id: id,
         anime_id: animeid,
         status: "On Hold",
         episodes_watched: 0,
         notes: ""
      })
      .then(res => {
         dispatch({
            type: "LOGIN_ADD_TO_PLAYLIST2",
            payload: animeid
         })
      })
}

export const loginRemoveFromePlaylist = (id, animeid) => dispatch => {
   const jwt = getJwt()
   axios
      .delete(`${api}/removefromplaylist`, {
         data: { id: id, anime_id: animeid }
      })
      .then(res => {
         dispatch({
            type: "DELETE_FROM_PLAYLIST",
            payload: animeid
         })
         dispatch(Authenticate(jwt))
         dispatch(getAnimelist(jwt))
      })
}

export const Logout = () => dispatch => {
   dispatch({
      type: "LOGOUT"
   })
   localStorage.removeItem("cool-jwt")
   history.push("/")
}
