import {
  REQUEST_SEARCHED_ANIME_PENDING,
  REQUEST_SEARCHED_ANIME_SUCCESS,
  REQUEST_SEARCHED_ANIME_FAILED
} from "../constants/action-types"

const initialSearchedAnime = {
  isPending: false,
  filteredAnime: [],
  error: ""
}
export const requestSearchedAnime = (
  state = initialSearchedAnime,
  action = {},
  search = ""
) => {
  switch (action.type) {
    case REQUEST_SEARCHED_ANIME_PENDING:
      return Object.assign({}, state, { isPending: true, search: action.query })

    case REQUEST_SEARCHED_ANIME_SUCCESS:
      return Object.assign({}, state, {
        filteredAnime: action.payload,
        isPending: false
      })

    case REQUEST_SEARCHED_ANIME_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      })
    default:
      return state
  }
}
