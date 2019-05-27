// import { history } from "../../../App"
import axios from "axios"
import { toast } from "react-toastify"

const api = "https://powerful-cove-90393.herokuapp.com"

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
   axios
      .post(`${api}/register`, {
         username: registerName,
         email: registerEmail,
         password: registerPassword
      })

      .then(data => {
         dispatch({
            type: "SUBMIT_REGISTER",
            payload: data.data
         })
         toast.success("Successfullly Registered", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false
         })
      })

      .catch(error => {
         dispatch({ type: "SUBMIT_REGISTER_FAILED", payload: error })
         console.log(error)
         toast.error(`${error.response.data.message}`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
         })
      })
}
