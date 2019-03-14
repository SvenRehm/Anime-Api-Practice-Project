const initialState = {
  signInEmail: "",
  signInPassword: ""
}

export const Login = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CHANGE_PASSWORD_FIELD":
      return Object.assign({}, state, { signInPassword: action.payload })
    case "CHANGE_EMAIL_FIELD":
      return Object.assign({}, state, { signInEmail: action.payload })
    case "SUBMIT_LOGIN":

      return Object.assign({}, state, { submit:true, data:action.payload })
    default:
      return state
  }
}
