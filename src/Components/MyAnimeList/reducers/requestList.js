const initialState = {
   animeList: [],
   isLoading: false
}
export const requestList = (state = initialState, action = {}) => {
   switch (action.type) {
      case "REQUEST_ANIME_LIST_PENDING":
         return {
            ...state,
            isLoading: true
         }
      case "REQUEST_ANIME_LIST_SUCCES":
         //RETRUN INTITALSTATE/THAN RETRURN REDUX STATE/THAN INJECT NEW STATE
         return {
            ...state,
            animeList: [...action.payload],
            isLoading: false
         }
      case "DELETE_ONE_PLAYLIST":
         const animelist = state.animeList.filter(
            items => items.id !== action.payload
         )
         return {
            ...state,
            animeList: animelist,
            isLoading: false
         }
      case "LOGOUT":
         return {
            ...state,
            animeList: []
         }

      default:
         return state
   }
}
