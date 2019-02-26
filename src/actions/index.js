import {
  CHANGE_SEARCH_FIELD,
  REQUEST_SEARCHED_ANIME_PENDING,
  REQUEST_SEARCHED_ANIME_SUCCESS,
  REQUEST_SEARCHED_ANIME_FAILED
} from "../constants/action-types"

export const changeSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

export const requestSearchedAnime = query => dispatch => {
  dispatch({
    type: REQUEST_SEARCHED_ANIME_PENDING,
    query
  })

  fetch(
    `https://kitsu.io/api/edge/anime?filter[text]=${query}&page%5Blimit%5D=20}`
  )
    .then(res => res.json())
    .then(data =>
      dispatch({ type: REQUEST_SEARCHED_ANIME_SUCCESS, payload: data.data })
    )

    .catch(error =>
      dispatch({ type: REQUEST_SEARCHED_ANIME_FAILED, payload: error })
    )
}
