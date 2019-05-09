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
      case "CHANGE_STATUS_ANIMELIST":
         return {
            ...state
         }

      case "EXPAND_LIST_ITEM":
         const expandedlist = state.animeList.map(items => {
            // eslint-disable-next-line
            if (items.id == action.animeid) {
               items = { ...items, isExpanded: action.payload }
               return items
            } else {
               return items
            }
         })

         return {
            ...state,

            animeList: [...expandedlist]
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
