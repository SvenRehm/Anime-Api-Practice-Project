import { CHANGE_SEARCH_FIELD } from "../constants/action-types"

export const changeSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}
