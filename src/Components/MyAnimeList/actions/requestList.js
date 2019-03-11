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
      //MAPPING OVER RESPONSE AN GIVING AN OBJECT BACK
    //   const animelist = data.map(id => ({
    //     animelist: data.data
    //   }))
       const animelist = data
      dispatch({ type: "REQUEST_ANIME_LIST_SUCCES", payload: animelist })
    })

    .catch(error =>
      dispatch({ type: "REQUEST_ANIME_LIST_FAILED", payload: error })
    )
}
