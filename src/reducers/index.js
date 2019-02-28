import { combineReducers } from "redux"
import { requestSearchedAnime } from "../Components/SearchOutput/reducers/requestSearchedAnime"
import { changeSearchField } from "../Components/SearchOutput/reducers/changeSearchField"
import { requestCategoryLinks, requestCategorys } from "../Components/Categorys/reducers/requestCatergoryLinks"
import { requestRecommendedAnime} from "../Components/RecommendedAnime/reducers/requestRecommendedAnime"
import { requestSingleMoreInfo } from "../Components/SingleMoreInfo/reducers/requestSingleMoreInfo"

const rootReducer = combineReducers({
  changeSearchField,
  requestSearchedAnime,
  requestCategoryLinks,
  requestCategorys,
  requestRecommendedAnime,
  requestSingleMoreInfo,
 
})

export default rootReducer
