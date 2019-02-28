import {
  REQUEST_CATEGORY_LINKS_PENDING,
  REQUEST_CATEGORY_LINKS_SUCCESS,
  REQUEST_CATEGORY_LINKS_FAILED,
  REQUEST_CATEGORYS_PENDING,
  REQUEST_CATEGORYS_SUCCESS,
  REQUEST_CATEGORYS_FAILED
} from "../../../constants/action-types"

const initialState = {
  isPending: false,
  animeCategoryLinks: [],
  animeCategorys: [],
  error: ""
}

export const requestCategoryLinks = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_CATEGORY_LINKS_PENDING:
      return Object.assign({}, state, { isPending: true })

    case REQUEST_CATEGORY_LINKS_SUCCESS:
      return Object.assign({}, state, {
        animeCategoryLinks: action.payload,
        isPending: false
      })

    case REQUEST_CATEGORY_LINKS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      })
    default:
      return state
  }
}

export const requestCategorys = (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_CATEGORYS_PENDING:
      return Object.assign({}, state, { isPending: true, search: action.query })

    case REQUEST_CATEGORYS_SUCCESS:
      return Object.assign({}, state, {
        animeCategorys: action.payload,
        isPending: false
      })

    case REQUEST_CATEGORYS_FAILED:
      return Object.assign({}, state, {
        error: action.payload,
        isPending: false
      })
    default:
      return state
  }
}
