import {
  REQUEST_CATEGORY_LINKS_PENDING,
  REQUEST_CATEGORY_LINKS_SUCCESS,
  REQUEST_CATEGORY_LINKS_FAILED,
  REQUEST_CATEGORYS_PENDING,
  REQUEST_CATEGORYS_SUCCESS,
  REQUEST_CATEGORYS_FAILED
} from "../../../constants/action-types"

// GET LINKS/URLS FOR THE CATEGORYS
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
      //CALLING ACTION THAT USES THE LINKS
      dispatch(requestCategorys(animeCategoryLinks))
    })

    .catch(error =>
      dispatch({ type: REQUEST_CATEGORY_LINKS_FAILED, payload: error })
    )
}

//ACTION THAT USES THE LINKS
export const requestCategorys = animeCategoryLinks => (dispatch, getState) => {
  dispatch({
    type: REQUEST_CATEGORYS_PENDING
  })
  //MAPPING LINKS
  const allanimelinks = animeCategoryLinks.map(function(item) {
    return item.url
  })
  //FETCHIN EVERY LINK
  let requests = allanimelinks.map(url => fetch(url))

  Promise.all(requests)
    .then(responses => {
      return responses
    })

    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(users => {
      //MAPPING OVER RESPONSE AN GIVING AN OBJECT BACK
      const category = users.map(user => ({
        title: user.data.attributes.title,
        totalMediaCount: user.data.attributes.totalMediaCount
      }))
      dispatch({ type: REQUEST_CATEGORYS_SUCCESS, payload: category })
    })

    .catch(error =>
      dispatch({ type: REQUEST_CATEGORYS_FAILED, payload: error })
    )
}
