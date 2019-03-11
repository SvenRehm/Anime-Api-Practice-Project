import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { addToPlaylist } from "../SingleMoreInfo/actions/addToPlaylist"
import { requestList } from "./actions/requestList"
const mapStateToProps = state => {
  return {
    animeId: state.addToPlaylist.animeId,
    animeList: state.requestList
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddToPlaylist: animeid => dispatch(addToPlaylist(animeid)),
    onRequestList: animeid => dispatch(requestList(animeid))
  }
}
const Styles = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(12, 100px);
  h1 {
    color: white;
    grid-column: 1 / span 3;
    grid-row: 2;
  }
`
class MyAnimeList extends Component {
  componentDidMount() {
    this.props.onRequestList(this.props.animeId)
   
  }
  render() {
    console.log()
    return (
      <Styles>
        <h1>My Anime List</h1>
      </Styles>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAnimeList)
