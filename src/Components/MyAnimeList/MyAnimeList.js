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
    // subtype: id.data.attributes.subtype,
    // posterimage: id.data.attributes.posterImage.tiny,
    // episodeCount: id.data.attributes.episodeCount,
    // totalLength: id.data.attributes.totalLength
    //load animeids from database
    animeListData: state.Login.user.animelist,
    isLoading: state.requestList.isLoading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddToPlaylist: animeid => dispatch(addToPlaylist(animeid)),
    onRequestList: animeid => dispatch(requestList(animeid))
  }
}
const MyAnimeListStyles = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 100px);
  grid-template-columns: repeat(12, minmax(0, 1fr));
  h2 {
    grid-column: 2 / span 8;
    grid-row: 2;
    font-size: 2em;
    justify-self: center;
    color: ${props => props.theme.secondary};
  }
  h1 {
    color: white;
    grid-column: 1 / span 3;
    grid-row: 2;
  }
  ul {
    grid-column: 2 / span 8;
    grid-row: 3/-1;
    color: white;
    list-style: none;
    display: grid;
    grid-auto-rows: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 0.7em;
    li {
      height: 110px;
      display: grid;
      width: 95%;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      background-color: ${props => props.theme.lightgrey};
      img {
        height: 100%;
        width: auto;
        justify-self: end;
        grid-row: 1;
        grid-column: 1 / span 1;
      }
      h1 {
        grid-column: 2 / span 2;
        grid-row: 1;
        margin-top: 10px;
        margin-left: 15px;
        font-size: 20px;
      }
      p {
        grid-column: 1 / span 1;
        grid-row: 1;
        align-self: center;
        margin-left: 2em;
      }
      h3 {
        margin-left: 15px;
        align-self: center;
        color: ${props => props.theme.secondary};
        grid-column: 2 / span 2;
        grid-row: 1;
      }
    }
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
      return (
        <li key={i}>
          <p>{i}</p>
          <img src={animeList[i].posterimage} alt="animesmallimage" />
          <h1>{animeList[i].title}</h1>
          <h3>
            {animeList[i].subtype}, {parseInt(animeList[i].startDate)}
          </h3>
        </li>
      )
    })

    return (
      <MyAnimeListStyles>
        <h2>My Anime List</h2>
        {this.props.isLoading ? <h1>LOADING</h1> : <ul>{AnimeList}</ul>}
      </MyAnimeListStyles>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAnimeList)
