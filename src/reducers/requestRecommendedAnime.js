import {
  REQUEST_RECOMMENDED_ANIME_PENDING,
  REQUEST_RECOMMENDED_ANIME_SUCCESS,
  REQUEST_RECOMMENDED_ANIME_FAILED
} from "../constants/action-types"

const initialState = {
  isPending: false,
  recommendedAnime: [],
  subtype: "tv",
  sort: "",
  error: ""
}
export const requestRecommendedAnime = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_RECOMMENDED_ANIME_PENDING:
      return Object.assign({}, state, {
        isPending: true,
        subtype: action.subtype,
        sort: action.sort
      })

    case REQUEST_RECOMMENDED_ANIME_SUCCESS:
      return Object.assign({}, state, {
        recommendedAnime: action.payload,
        isPending: false
      })

    case REQUEST_RECOMMENDED_ANIME_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      })
    default:
      return state
  }
}
