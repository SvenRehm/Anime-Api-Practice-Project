import React, { Component } from "react"
import { connect } from "react-redux"
import { requestRecommendedAnime } from "./actions/requestRecommendedAnime"
import {
  requestPageTwo,
  changeSelect,
  changeSelectType
} from "./actions/requestPageTwo"
import RecommendedAnimeCard from "./RecommendedAnimeCard"
import SortFilterBox from "./SortFilterBox"
import SortTypeBox from "./SortTypeBox"
import InfiniteScroll from "react-infinite-scroller"
import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  margin: 1em;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`

const mapStateToProps = state => {
  const {
    id,
    recommendedAnime,
    subtype,
    episodeCount,
    isPending,
    sort,
    pagination,

    error
  } = state.requestRecommendedAnime

  return {
    id: id,
    url: pagination,
    recommendedAnime: recommendedAnime,
    subtype: subtype,
    sort: sort,

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
      dispatch(changeSelect(e.target.value))
    },
    onChangeSelectType: e => {
      dispatch(changeSelectType(e.target.value))
    }
  }
}

class RecommendedAnime extends Component {
  componentDidMount() {
    this.props.onRequestRecommendedAnime(this.props.subtype, this.props.sort, "current")
  }
  componentWillReceiveProps(newProps) {
    if (newProps.sort !== this.props.sort) {
      this.props.onRequestRecommendedAnime(this.props.subtype, newProps.sort, "current")
    }
    if (newProps.subtype !== this.props.subtype) {
      console.log(newProps.subtype)
      this.props.onRequestRecommendedAnime(newProps.subtype, this.props.sort, "current")
    }
  }
  // componentWillUpdate(newProps) {
  //   if (newProps.subtype !== this.props.subtype) {
  //     console.log(newProps.subtype)
  //     this.props.onRequestRecommendedAnime(newProps.subtype, this.props.sort)
  //   }
  // }

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
