import {
  CHANGE_SEARCH_FIELD,
  REQUEST_SEARCHED_ANIME_PENDING,
  REQUEST_SEARCHED_ANIME_SUCCESS,
  REQUEST_SEARCHED_ANIME_FAILED,
  REQUEST_CATEGORY_LINKS_PENDING,
  REQUEST_CATEGORY_LINKS_SUCCESS,
  REQUEST_CATEGORY_LINKS_FAILED,
  REQUEST_CATEGORYS_PENDING,
  REQUEST_CATEGORYS_SUCCESS,
  REQUEST_CATEGORYS_FAILED
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
}

export const requestCategoryLinks = () => dispatch => {
  dispatch({
    type: REQUEST_CATEGORY_LINKS_PENDING
  })
  fetch(`https://kitsu.io/api/edge/category-favorites`)
    .then(res => res.json())
    .then(data => {
      const animeCategoryLinks = data.data.map(id => ({
        url: id.relationships.category.links.related
      }))
      dispatch({
        type: REQUEST_CATEGORY_LINKS_SUCCESS,
        payload: animeCategoryLinks
      })
    })

    .catch(error =>
      dispatch({ type: REQUEST_CATEGORY_LINKS_FAILED, payload: error })
    )
}

export const requestCategorys = () => (dispatch, getState) => {
  dispatch({
    type: REQUEST_CATEGORYS_PENDING
  })
  const state = getState()

  let allCategoryLinks = state.requestCategoryLinks.animeCategoryLinks[0].url
  
  fetch(`${allCategoryLinks}`)
    .then(res => res.json())
    .then(users => {
      // const catergory= users.map(user => ({
      //            title: user.data.attributes.title,
      //             totalMediaCount: user.data.attributes.totalMediaCount

      // }))
      dispatch({ type: REQUEST_CATEGORYS_SUCCESS, payload: users })
    })

    .catch(error =>
      dispatch({ type: REQUEST_CATEGORYS_FAILED, payload: error })
    )
}

export const doEverything = () => {
  return dispatch =>
    Promise.all([
      dispatch(requestCategoryLinks()),
      dispatch(requestCategorys())
    ])
}
