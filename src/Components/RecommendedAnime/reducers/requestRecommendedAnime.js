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
  subtype: "tv",
  sort: "popularityRank",
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

    case "INCREMENT_PAGE":
      return {
        page: state.page + 1
      }
    case "DECREMENT_PAGE":
      return {
        page: state.page - 1
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
