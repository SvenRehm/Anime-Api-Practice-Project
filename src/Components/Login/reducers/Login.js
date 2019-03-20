const initialState = {
  signInEmail: "",
  signInPassword: "",
  LoggedIn: false,
  token: null,
  user: {
    animelist: []
  }
}

export const Login = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CHANGE_PASSWORD_FIELD":
      return Object.assign({}, state, { signInPassword: action.payload })
    case "CHANGE_EMAIL_FIELD":
      return Object.assign({}, state, { signInEmail: action.payload })
    case "SUBMIT_LOGIN":
      return Object.assign({}, state, {
        LoggedIn: true,
        user: action.payload,
        signInEmail: "",
        signInPassword: "",
        token: action.token
      })
    case "LOGIN_ADD_TO_PLAYLIST":
      return {
        ...state

        // user: {
        //   ...state.user,
        //   animelist: [...action.payload]
        // }
      }
    default:
      return state
  }
}
