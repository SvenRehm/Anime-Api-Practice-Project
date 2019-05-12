import {
   REQUEST_RECOMMENDED_ANIME_PENDING,
   REQUEST_RECOMMENDED_ANIME_SUCCESS,
   REQUEST_RECOMMENDED_ANIME_FAILED
} from "../../../constants/action-types"

export const requestRecommendedAnime = (subtype, sort, status) => dispatch => {
   dispatch({
      type: REQUEST_RECOMMENDED_ANIME_PENDING,
      subtype,
      sort,
      status
   })

   fetch(
      `https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=${status}&filter%5Bsubtype%5D=${subtype}&page%5Blimit%5D=20&page%5Boffset%5D=0&sort=${sort}`

      // `https://kitsu.io/api/edge/anime?filter%5Bsubtype%5D=${subtype}&page%5Blimit%5D=20&page%5Boffset%5D=0&sort=${sort}`
      // `https://kitsu.io/api/edge/anime?filter[subtype]=${subtype}&sort=${sort}`
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
            episodeCount: id.attributes.episodeCount
         }))
         const pagination = data.links
         dispatch({
            type: REQUEST_RECOMMENDED_ANIME_SUCCESS,
            payload: recommendedAnime,
            pagination: pagination
         })
      })

      .catch(error =>
         dispatch({ type: REQUEST_RECOMMENDED_ANIME_FAILED, payload: error })
      )
}
