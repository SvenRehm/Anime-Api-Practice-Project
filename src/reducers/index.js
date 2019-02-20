import { CHANGE_SEARCH_FIELD } from "../constants/action-types"

const initialState = {
  search: ""
}

export const searchAnime = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { search: action.payload })
    default:
      return state
  }
}
