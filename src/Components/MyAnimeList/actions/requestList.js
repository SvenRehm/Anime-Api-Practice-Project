import axios from "axios"

const api = "https://powerful-cove-90393.herokuapp.com"
//ACTION THAT USES THE LINKS
export const requestList = animelistids => dispatch => {
   dispatch({
      type: "REQUEST_ANIME_LIST_PENDING"
   })

   //FETCHIN EVERY LINK

   let requests = animelistids
      ? animelistids.map(id => fetch(`https://kitsu.io/api/edge/anime/${id}`))
      : null

   Promise.all(requests)
      .then(responses => {
         return responses
      })
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(data => {
         //MAPPING OVER RESPONSE AND GIVING AN OBJECT BACK
         const animelist = data.map(id => ({
            id: id.data.id,
            title: id.data.attributes.canonicalTitle,
            subtype: id.data.attributes.subtype,
            posterimage: id.data.attributes.posterImage.tiny,
            episodeCount: id.data.attributes.episodeCount,
            totalLength: id.data.attributes.totalLength,
            startDate: id.data.attributes.startDate,
            endDate: id.data.attributes.endDate,
            ageRatingGuide: id.data.attributes.ageRatingGuide,
            status: id.data.attributes.status,
            averageRating: id.data.attributes.averageRating,
            popularityRank: id.data.attributes.popularityRank,
            nsfw: id.data.attributes.nsfw,

            isExpanded: false
         }))
         //   const animelist = data
         dispatch({ type: "REQUEST_ANIME_LIST_SUCCES", payload: animelist })
      })

      .catch(error =>
         dispatch({ type: "REQUEST_ANIME_LIST_FAILED", payload: error })
      )
}

export const RemoveFromePlaylist = (id, animeid) => dispatch => {
   dispatch({
      type: "DELETE_ONE_PLAYLIST",
      id: id,
      payload: animeid
   })
}

export const ExpandListItem = (animeid, expand) => dispatch => {
   dispatch({
      type: "EXPAND_LIST_ITEM",
      animeid: animeid,
      payload: expand
   })
}

export const changeStatus = (id, animeid, status) => dispatch => {
   axios
      .put(`${api}/update`, {
         id: id,
         anime_id: animeid,
         status: status
      })
      .then(res => {
         dispatch({
            type: "CHANGE_STATUS_ANIMELIST",
            animeid: animeid,
            payload: status
         })
      })
}
