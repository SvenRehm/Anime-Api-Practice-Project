const initialState = {
  signInEmail: "",
  signInPassword: "",
  LoggedIn: false,

  user: {
    id: "0",
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
        signInEmail: "",
        signInPassword: ""
      })
    case "AUTHENTICATE":
      return {
        ...state,
        LoggedIn: true,
        user: action.payload
      }
    case "LOGIN_ADD_TO_PLAYLIST":
      return {
        ...state,
        user: {
          ...state.user,
          animelist: [...state.user.animelist, action.payload]
        }
      }
    case "DELETE_FROM_PLAYLIST":
      return {
        ...state
      }

    case "LOGOUT":
      return {
        ...state,
        LoggedIn: false,
        user: {
          animelist: []
        }
      }
    default:
      return state
  }
}
