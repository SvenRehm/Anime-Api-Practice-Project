const initialaddToPlaylist = {
  onPlaylist: false,
  animeId: []
}
export const addToPlaylist = (state = initialaddToPlaylist, action = {}) => {
  switch (action.type) {
    case "ADD_TO_PLAYLIST":
      return Object.assign({}, state, {
        onPlaylist: true,
        animeId: [...state.animeId, action.payload]
      })

    default:
      return state
  }
}






