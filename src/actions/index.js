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
  fetch(`https://kitsu.io/api/edge/anime?filter[text]=${query}}`)
    .then(res => res.json())
    .then(data =>
      dispatch({ type: REQUEST_SEARCHED_ANIME_SUCCESS, payload: data.data })
    )

    .catch(error =>
      dispatch({ type: REQUEST_SEARCHED_ANIME_FAILED, payload: error })
    )
  // const api_search = "https://kitsu.io/api/edge/anime?filter[text]="
  // const { search } = this.props
  // const textSearchUrl = `${api_search}${search}`
}
