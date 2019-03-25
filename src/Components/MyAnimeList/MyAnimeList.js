import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { addToPlaylist } from "../SingleMoreInfo/actions/addToPlaylist"
import { requestList } from "./actions/requestList"
const mapStateToProps = state => {
  return {
    animeId: state.addToPlaylist.animeId,
    animeList: state.requestList.animeList,
    userId: state.Login.user.id,
    //load animeids from database
    animeListData: state.Login.user.animelist
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
  ul {
    grid-column: 1 / span 4;
    grid-row: 3;
    color: white;
  }
`

class MyAnimeList extends Component {
  componentDidMount() {
    if (this.props.animeListData) {
      this.props.onRequestList(this.props.animeListData)
    } 
  }

  render() {
    const { animeList } = this.props
    const AnimeList = animeList.map((category, i) => {
      return <li key={i}> {animeList[i].title}</li>
    })

    console.log(this.props.animeListData)
    return (
      <Styles>
        <h1>My Anime List</h1>

        <ul>{AnimeList}</ul>
      </Styles>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAnimeList)
