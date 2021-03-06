import { history } from "../../../App"
import axios from "axios"
// import { getJwt } from "../../helpers/jwt"

import { toast } from "react-toastify"

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

const api = "https://powerful-cove-90393.herokuapp.com"

export const submitLogin = (loginEmail, loginPassword) => dispatch => {
   axios
      .post(`${api}/getToken`, {
         email: loginEmail,
         password: loginPassword
      })

      .then(res => {
         dispatch({
            type: "SUBMIT_LOGIN",
            payload: res.data
         })

         dispatch(Authenticate(res.data))
         // dispatch(getAnimelist(res.data))
         localStorage.setItem("cool-jwt", res.data)
         // history.push("/")

         toast.success("Successfullly logged In", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false
         })
         history.goBack()
      })
      .catch(error => {
         dispatch({ type: "SUBMIT_LOGIN_FAILED", payload: error })
         toast.error(`${error.response.data.message}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false
         })
      })
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

         dispatch(getAnimelist(res.data.id))
      })
      .catch(err => {
         localStorage.removeItem("cool-jwt")
         history.push("/Login")
      })
}

export const getAnimelist = id => dispatch => {
   axios

      .get(`${api}/getAnimeToken`, { params: { id: id } })
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
         console.log(err)
         // history.push("/Login")
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
         dispatch(getAnimelist(res.data.id))
      })
      .catch(err => {
         localStorage.removeItem("cool-jwt")
      })
}

export const loginAddToPlaylist2 = (id, animeid) => dispatch => {
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
            payload: animeid,
            id: id
         })

         toast.success("Successfullly added Anime to Playlist", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false
         })
      })
}

export const addEpisodeToAnime = (id, animeid, plusone) => dispatch => {
   axios
      .put(`${api}/update`, {
         id: id,
         anime_id: animeid,
         episodes_watched: plusone
      })
      .then(res => {
         dispatch({
            type: "ADD_EPISODE_TO_ANIME",
            animeid: animeid,
            payload: plusone
         })
      })
}

export const loginRemoveFromePlaylist = (id, animeid) => dispatch => {
   // const jwt = getJwt()
   axios
      .delete(`${api}/removefromplaylist`, {
         data: { id: id, anime_id: animeid }
      })
      .then(res => {
         dispatch({
            type: "DELETE_FROM_PLAYLIST",
            payload: animeid
         })
         // dispatch(reloadUser(jwt))
         // dispatch(Authenticate(jwt))
         dispatch(getAnimelist(id))
      })
}

export const Logout = () => dispatch => {
   dispatch({
      type: "LOGOUT"
   })
   toast.success("Successfullly logged Out", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false
   })
   localStorage.removeItem("cool-jwt")
   history.push("/")
}
