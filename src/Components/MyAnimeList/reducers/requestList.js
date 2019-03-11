const initialState = {
  animeList: []
}
export const requestList = (state = initialState, action = {}) => {
  switch (action.type) {
    case "REQUEST_ANIME_LIST_SUCCES":
      //RETRUN INTITALSTATE/THAN RETRURN REDUX STATE/THAN INJECT NEW STATE
      return {
        ...state,
        animeList: [...state.animeList, ...action.payload]
        // animeList: action.payload
      }

    default:
      return state
  }
}
