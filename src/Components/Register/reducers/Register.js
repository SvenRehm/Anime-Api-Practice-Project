const initialState = {
  registerEmail: "",
  registerPassword: "",
  registerName: ""
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
        data: action.payload
      })
    default:
      return state
  }
}
