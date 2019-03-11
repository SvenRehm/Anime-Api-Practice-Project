import { combineReducers } from "redux"
import { requestSearchedAnime } from "../Components/SearchOutput/reducers/requestSearchedAnime"
import { changeSearchField } from "../Components/SearchOutput/reducers/changeSearchField"
import {
  requestCategoryLinks,
  requestCategorys
} from "../Components/Categorys/reducers/requestCatergoryLinks"
import { requestRecommendedAnime } from "../Components/RecommendedAnime/reducers/requestRecommendedAnime"
import { requestSingleMoreInfo } from "../Components/SingleMoreInfo/reducers/requestSingleMoreInfo"
import { addToPlaylist } from "../Components/SingleMoreInfo/reducers/addToPlaylist"
import { requestList } from "../Components/MyAnimeList/reducers/requestList"
const rootReducer = combineReducers({
  changeSearchField,
  requestSearchedAnime,
  requestCategoryLinks,
  requestCategorys,
  requestRecommendedAnime,
  requestSingleMoreInfo,
  addToPlaylist,
  requestList
})

export default rootReducer
