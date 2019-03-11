import React, { Component } from "react"
import { connect } from "react-redux"
import { requestRecommendedAnime } from "./actions/requestRecommendedAnime"
import {
  requestPageTwo,
  changeSelect,
  changeSelectType,
  changeStatus
} from "./actions/requestPageTwo"
import RecommendedAnimeCard from "./RecommendedAnimeCard"
import SortFilterBox from "./SortFilterBox"
import SortStatus from "./SortStatus"
import SortTypeBox from "./SortTypeBox"
import InfiniteScroll from "react-infinite-scroller"
import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  margin: 1em;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  background: ${props => props.theme.primary};
`

const mapStateToProps = state => {
  const {
    id,
    recommendedAnime,
    subtype,
    episodeCount,
    isPending,
    sort,
    status,
    pagination,

    error
  } = state.requestRecommendedAnime

  return {
    id: id,
    url: pagination,
    recommendedAnime: recommendedAnime,
    subtype: subtype,
    sort: sort,
    status: status,

    isPending: isPending,
    episodeCount: episodeCount,
    error: error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestRecommendedAnime: (subtype, sort, status) =>
      dispatch(requestRecommendedAnime(subtype, sort, status)),
    onRequestPageTwo: (url, subtype, sort) =>
      dispatch(requestPageTwo(url, subtype, sort)),
    onChangeSelect: e => {
      dispatch(changeSelect(e.value))
    },
    onChangeSelectType: e => {
      dispatch(changeSelectType(e.value))
    },
    onChangeStatus: e => {
      dispatch(changeStatus(e.value))
    }
  }
}

class RecommendedAnime extends Component {
  componentDidMount() {
    //loading recommended anime
    this.props.onRequestRecommendedAnime(
      this.props.subtype,
      this.props.sort,
      this.props.status
    )
  }
  componentWillReceiveProps(newProps) {
    //sort Update (rating...)
    if (newProps.sort !== this.props.sort) {
      this.props.onRequestRecommendedAnime(
        this.props.subtype,
        newProps.sort,
        this.props.status
      )
    }
    //subtype (tv/movie..)
    if (newProps.subtype !== this.props.subtype) {
      console.log(newProps.subtype)
      this.props.onRequestRecommendedAnime(
        newProps.subtype,
        this.props.sort,
        this.props.status
      )
    }

    //sataus of the animes (finished/current..)
    if (newProps.status !== this.props.status) {
      console.log(newProps.subtype)
      this.props.onRequestRecommendedAnime(
        this.props.subtype,
        this.props.sort,
        newProps.status
      )
    }
  }


  render() {
    const { recommendedAnime } = this.props

    //mapping over received anime
    const RecommendedAnime = recommendedAnime.map((category, i) => {
      return (
     
        <RecommendedAnimeCard
          key={i}
          id={recommendedAnime[i].id}
          src={recommendedAnime[i].posterImage}
          title={recommendedAnime[i].cannontitle}
          averageRating={recommendedAnime[i].averageRating}
          episodeCount={recommendedAnime[i].episodeCount}
        />
      )
    })

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={() =>
          this.props.onRequestPageTwo(
            this.props.url.next,
            this.props.subtype,
            this.props.sort
          )
        }
        initialLoad={false}
        useWindow={true}
        threshold={500}
        hasMore={this.props.recommendedAnime.length <= 200}
      >
        <SortStatus onChangeStatus={this.props.onChangeStatus} />
        <SortTypeBox onChangeSelectType={this.props.onChangeSelectType} />
        <SortFilterBox onChangeSelect={this.props.onChangeSelect} />
        <Grid>{RecommendedAnime}</Grid>
      </InfiniteScroll>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedAnime)
