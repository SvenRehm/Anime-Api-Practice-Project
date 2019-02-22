import { combineReducers } from "redux"
import { requestSearchedAnime } from "./requestSearchedAnime"
import { changeSearchField } from "./changeSearchField"
import { requestCategoryLinks, requestCategorys } from "./requestCatergoryLinks"

const rootReducer = combineReducers({
  changeSearchField,
  requestSearchedAnime,
  requestCategoryLinks,
  requestCategorys
})

export default rootReducer
