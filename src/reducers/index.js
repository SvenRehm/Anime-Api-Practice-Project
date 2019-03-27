import { combineReducers } from "redux"
import { requestSearchedAnime } from "../Components/SearchOutput/reducers/requestSearchedAnime"
import { changeSearchField } from "../Components/SearchOutput/reducers/changeSearchField"
import {
  requestCategoryLinks,
  requestCategorys
} from "../Components/Categorys/reducers/requestCatergoryLinks"
import { requestRecommendedAnime } from "../Components/RecommendedAnime/reducers/requestRecommendedAnime"
import { requestSingleMoreInfo } from "../Components/SingleMoreInfo/reducers/requestSingleMoreInfo"

import { requestList } from "../Components/MyAnimeList/reducers/requestList"
import { Login } from "../Components/Login/reducers/Login"
import { Register } from "../Components/Register/reducers/Register"

const rootReducer = combineReducers({
  changeSearchField,
  requestSearchedAnime,
  requestCategoryLinks,
  requestCategorys,
  requestRecommendedAnime,
  requestSingleMoreInfo,

  requestList,
  Login,
  Register
})

export default rootReducer
