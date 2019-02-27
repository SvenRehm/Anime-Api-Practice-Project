import {
  REQUEST_SINGLE_MORE_INFO_PENDING,
  REQUEST_SINGLE_MORE_INFO_SUCCESS,
  REQUEST_SINGLE_MORE_INFO_FAILED
} from "../constants/action-types"

const initialSingleMoreInfo = {
  isPending: false,
  singleMoreInfo: {
    attributes: {
      synopsis: "",
      coverImage: {
        large: "",
        medium: ""
      },
      posterImage: {
        large: "",
        medium: ""
      }
    }
  },

  error: ""
}
export const requestSingleMoreInfo = (
  state = initialSingleMoreInfo,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_SINGLE_MORE_INFO_PENDING:
      return Object.assign({}, state, { isPending: true })

    case REQUEST_SINGLE_MORE_INFO_SUCCESS:
      return Object.assign({}, state, {
        singleMoreInfo: action.payload,
        isPending: false
      })

    case REQUEST_SINGLE_MORE_INFO_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      })
    default:
      return state
  }
}
