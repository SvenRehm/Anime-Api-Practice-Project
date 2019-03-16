// export const addToPlaylist = animeid => {
//   return {
//     type: "ADD_TO_PLAYLIST",
//     payload: animeid
//   }
// }

export const addToPlaylist = (id, animeid) => dispatch => {
  fetch("http://localhost:3001/addplaylist", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      animeid: animeid
    })
  })
    .then(response => response.json())
    .then(animeid => {
      dispatch({
        type: "ADD_TO_PLAYLIST",
        payload: animeid
      })
    })
}
