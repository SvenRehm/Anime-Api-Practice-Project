const initialState = {
  registerEmail: "",
  registerPassword: "",
  registerName: "",
  message: ""
}

export const Register = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CHANGE_REGISTER_PASSWORD_FIELD":
      return Object.assign({}, state, { registerPassword: action.payload })
    case "CHANGE_REGISTER_EMAIL_FIELD":
      return Object.assign({}, state, { registerEmail: action.payload })
    case "CHANGE_REGISTER_NAME_FIELD":
      return Object.assign({}, state, { registerName: action.payload })
    case "SUBMIT_REGISTER":
      return Object.assign({}, state, {
        submitRegister: true,
        message: action.payload.message,
        registerEmail: "",
        registerPassword: "",
        registerName: ""
      })
    case "SUBMIT_REGISTER_FAILED":
      return Object.assign({}, state, {
        message: action.payload.response.data.message
      })
    default:
      return state
  }
}
