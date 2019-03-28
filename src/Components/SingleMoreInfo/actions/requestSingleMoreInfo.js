import {
  REQUEST_SINGLE_MORE_INFO_PENDING,
  REQUEST_SINGLE_MORE_INFO_SUCCESS,
  REQUEST_SINGLE_MORE_INFO_FAILED
} from "../../../constants/action-types"
import { reloadUser } from "../../Login/actions/Login"
import { getJwt } from "../../helpers/jwt"

export const requestSingleMoreInfo = animeid => dispatch => {
  const jwt = getJwt()
  dispatch({
    type: REQUEST_SINGLE_MORE_INFO_PENDING,
    animeid
  })
  fetch(`https://kitsu.io/api/edge/anime/${animeid}`)
    .then(res => res.json())
    .then(data => {
      const info = data.data

      dispatch({
        type: REQUEST_SINGLE_MORE_INFO_SUCCESS,
        payload: info
      })
      dispatch(reloadUser(jwt))
    })
    .catch(error =>
      dispatch({ type: REQUEST_SINGLE_MORE_INFO_FAILED, payload: error })
    )
}

export const requestSingleCategories = animeid => dispatch => {
  fetch(
    `https://kitsu.io/api/edge/anime/${animeid}/categories?page%5Blimit%5D=12&page%5Boffset%5D=0`
  )
    .then(res => res.json())
    .then(data => {
      const info = data.data
      dispatch({
        type: "REQUEST_SINGLE_CATEGORIES_SUCCESS",
        payload: info
      })
    })
}
