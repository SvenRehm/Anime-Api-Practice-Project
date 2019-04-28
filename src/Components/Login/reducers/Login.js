const initialState = {
   signInEmail: "",
   signInPassword: "",
   LoggedIn: false,
   message: "",
   user: {
      id: "0",
      animelist: [
         { id: "", anime_id: "", episodes_watched: "", status: "", notes: "" }
      ],
      animeids: []
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
      case "SUBMIT_LOGIN_FAILED":
         return Object.assign({}, state, {
            signInEmail: "",
            signInPassword: "",
            message: action.payload.response.data.message
         })
      case "AUTHENTICATE":
         return {
            ...state,
            LoggedIn: true,

            user: {
               ...state.user,
               id: action.payload.id,
               username: action.payload.username,
               email: action.payload.email,
               joined: action.payload.joined,
               animelist: [...state.user.animelist],
               animeids: [...state.user.animeids]
            }
         }
      case "GET_ANIMELIST":
         return {
            ...state,
            user: {
               ...state.user,
               animelist: action.payload,
               animeids: action.anime_id
            }
         }

      case "REALOAD_USER":
         return {
            ...state,
            LoggedIn: true,
            user: {
               id: action.payload.id,
               username: action.payload.username,
               animelist: action.payload.animelist,
               email: action.payload.email,
               joined: action.payload.joined
            }
         }
      case "LOGIN_ADD_TO_PLAYLIST":
         return {
            ...state,
            user: {
               ...state.user,
               animelist: [...state.user.animelist, action.payload]
            }
         }
      case "LOGIN_ADD_TO_PLAYLIST2":
         return {
            ...state,
            user: {
               ...state.user,
               animeids: [...state.user.animeids, action.payload]
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
               id: "0",
               animelist: [],
               animeids: []
            }
         }
      default:
         return state
   }
}
