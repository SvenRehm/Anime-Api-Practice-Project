//ACTION THAT USES THE LINKS
export const requestList = animeCategoryLinks => dispatch => {
  dispatch({
    type: "REQUEST_ANIME_LIST_PENDING"
  })

  //FETCHIN EVERY LINK
  let requests = animeCategoryLinks.map(id =>
    fetch(`https://kitsu.io/api/edge/anime/${id}`)
  )

  Promise.all(requests)
    .then(responses => {
      return responses
    })

    .then(responses => Promise.all(responses.map(r => r.json())))
    .then(data => {
      //MAPPING OVER RESPONSE AND GIVING AN OBJECT BACK
      const animelist = data.map(id => ({
        id: id.data.id,
        title: id.data.attributes.canonicalTitle
      }))
      //   const animelist = data
      dispatch({ type: "REQUEST_ANIME_LIST_SUCCES", payload: animelist })
    })

    .catch(error =>
      dispatch({ type: "REQUEST_ANIME_LIST_FAILED", payload: error })
    )
}
