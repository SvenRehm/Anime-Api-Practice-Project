import {
  REQUEST_RECOMMENDED_ANIME_PENDING,
  REQUEST_RECOMMENDED_ANIME_SUCCESS,
  REQUEST_RECOMMENDED_ANIME_FAILED
} from "../constants/action-types"

export const requestRecommendedAnime = (subtype, sort) => dispatch => {
  dispatch({
    type: REQUEST_RECOMMENDED_ANIME_PENDING,
    subtype,
    sort
  })
  fetch(
    `https://kitsu.io/api/edge/anime?filter[subtype]=${subtype}&sort=${sort}`
  )
    .then(res => res.json())
    .then(data => {
      const recommendedAnime = data.data.map(id => ({
        id: id.id,
        name: id.attributes.titles.en,
        cannontitle: id.attributes.canonicalTitle,
        ratingRank: id.attributes.ratingRank,
        averageRating: id.attributes.averageRating,
        posterImage: id.attributes.posterImage.large,
        episodeCount:id.attributes.episodeCount
      }))
      dispatch({
        type: REQUEST_RECOMMENDED_ANIME_SUCCESS,
        payload: recommendedAnime
      })
    })

    .catch(error =>
      dispatch({ type: REQUEST_RECOMMENDED_ANIME_FAILED, payload: error })
    )
}
