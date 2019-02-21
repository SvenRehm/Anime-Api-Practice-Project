import { combineReducers } from "redux"
import { requestSearchedAnime } from "./requestSearchedAnime"
import { changeSearchField } from "./changeSearchField"

export default combineReducers({
  changeSearchField,
  requestSearchedAnime
})
