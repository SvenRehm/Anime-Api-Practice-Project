import {
  REQUEST_RECOMMENDED_ANIME_PENDING,
  REQUEST_RECOMMENDED_ANIME_SUCCESS,
  REQUEST_RECOMMENDED_ANIME_FAILED
} from "../../../constants/action-types"

const initialState = {
  isPending: false,
  recommendedAnime: [],
  pagination: {
    first: "",
    prev: "",
    next: "",
    last: ""
  },
  status: "finished",
  subtype: "tv",
  sort: "popularityRank",
  error: ""
}
export const requestRecommendedAnime = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_RECOMMENDED_ANIME_PENDING:
      return Object.assign({}, state, {
        isPending: true
      })

    case REQUEST_RECOMMENDED_ANIME_SUCCESS:
      return {
        ...state,
        recommendedAnime: action.payload,
        pagination: action.pagination,
        isPending: false
      }

    case "REQUEST_SECOND_PAGE_SUCCES":
      //RETRUN INTITALSTATE/THAN RETRURN REDUX STATE/THAN INJECT NEW STATE
      return {
        ...state,
        recommendedAnime: [...state.recommendedAnime, ...action.payload],
        pagination: action.pagination
      }

    case "CHANGE_SELELECT":
      return {
        ...state,
        sort: action.payload
      }

    case "CHANGE_SELELECT_TYPE":
      return {
        ...state,
        subtype: action.payload
      }
    case "CHANGE_STATUS":
      return {
        ...state,
        status: action.payload
      }
    case REQUEST_RECOMMENDED_ANIME_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      })
    default:
      return state
  }
}
