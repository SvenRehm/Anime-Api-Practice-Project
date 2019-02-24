import { combineReducers } from "redux"
import { requestSearchedAnime } from "./requestSearchedAnime"
import { changeSearchField } from "./changeSearchField"
import { requestCategoryLinks, requestCategorys } from "./requestCatergoryLinks"
import { requestRecommendedAnime } from "./requestRecommendedAnime"

const rootReducer = combineReducers({
  changeSearchField,
  requestSearchedAnime,
  requestCategoryLinks,
  requestCategorys,
  requestRecommendedAnime
})

export default rootReducer
