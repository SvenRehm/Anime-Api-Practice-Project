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
            startDate: id.data.attributes.startDate
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
