const initialState = {
  isPending: false,
  recommendedAnime: [],
  subtype: "tv",
  sort: "popularityRank",
  error: ""
}
export const requestPageTwo = (state = initialState, action = {}) => {
  switch (action.type) {
    case "REQUEST_SECOND_PAGE_PENDING":
      return Object.assign({}, state, {
        isPending: true,
        subtype: action.subtype,
        sort: action.sort
      })

    case "REQUEST_SECOND_PAGE_SUCCES":
      return Object.assign({}, state, {
        recommendedAnime: action.payload,
        isPending: false
      })

    case "REQUEST_SECOND_PAGE_PENDING_FAILED":
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      })
    default:
      return state
  }
}
