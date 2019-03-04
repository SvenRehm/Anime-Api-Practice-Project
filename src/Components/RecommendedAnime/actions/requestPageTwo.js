export const requestPageTwo = (url, subtype, sort) => dispatch => {
  dispatch({
    type: "REQUEST_SECOND_PAGE_PENDING",
    subtype,
    sort
  })

  fetch(`${url}?filter[subtype]=${subtype}&sort=${sort}`)
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
        type: "REQUEST_SECOND_PAGE_SUCCES",
        payload: recommendedAnime,
        pagination: pagination
      })
    })

    .catch(error =>
      dispatch({ type: "REQUEST_SECOND_PAGE_PENDING_FAILED", payload: error })
    )
}

export const changeSelect = input => {
  return {
    type: "CHANGE_SELELECT",
    payload: input
  }
}

export const changeSelectType = input => {
  return {
    type: "CHANGE_SELELECT_TYPE",
    payload: input
  }
}


