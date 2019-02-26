import {
  REQUEST_SINGLE_MORE_INFO_PENDING,
  REQUEST_SINGLE_MORE_INFO_SUCCESS,
  REQUEST_SINGLE_MORE_INFO_FAILED
} from "../constants/action-types"

export const requestSingleMoreInfo = animeid => dispatch => {
  dispatch({
    type: REQUEST_SINGLE_MORE_INFO_PENDING,
    animeid
  })
  fetch(`https://kitsu.io/api/edge/anime/${animeid}`)
    .then(res => res.json())
    .then(data => {
      const info = data.data
      const SingleInfo = {
        type: info.type,
        attributes: info.attributes,
        posterImage: info.attributes.posterImage,
        coverImage: info.attributes.coverImage,
        titles: info.attributes.titles,
        relationships: info.relationships
      }
      dispatch({
        type: REQUEST_SINGLE_MORE_INFO_SUCCESS,
        payload: SingleInfo
      })
    })

    .catch(error =>
      dispatch({ type: REQUEST_SINGLE_MORE_INFO_FAILED, payload: error })
    )
}
