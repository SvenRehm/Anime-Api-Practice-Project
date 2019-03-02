import React, { Component } from "react"
import { connect } from "react-redux"
import { requestRecommendedAnime } from "./actions/requestRecommendedAnime"
import {
  requestPageTwo,
  incrementPage,
  decrementPage
} from "./actions/requestPageTwo"
import RecommendedAnimeCard from "./RecommendedAnimeCard"
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
    onRequestRecommendedAnime: (subtype, sort) =>
      dispatch(requestRecommendedAnime(subtype, sort)),
    onRequestPageTwo: (url, subtype, sort) =>
      dispatch(requestPageTwo(url, subtype, sort)),
    onIncrementPage: () => dispatch(incrementPage()),
    onDecrementPage: () => dispatch(decrementPage())
  }
}

class RecommendedAnime extends Component {
  componentDidMount() {
    // window.addEventListener("scroll", this.onScroll, false)

    this.props.onRequestRecommendedAnime(this.props.subtype, this.props.sort)
  }
  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.onScroll, false)
  // }

  handleClick = () => {
    this.props.onRequestPageTwo(
      this.props.subtype,
      this.props.sort,
      this.state.page
    )
  }
  handleScroll = () => {
    console.log(this.props.recommendedAnime.length)
    // var heightBound = window.height * 0.8
    // console.log(window)

    // if (heightBound > window.scrollY) {
    //   console.log("hello")
  }
  onScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      this.props.recommendedAnime.length &&
      !this.props.isPedning
    ) {
      this.props.onRequestPageTwo(
        this.props.url.next,
        this.props.subtype,
        this.props.sort
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
        threshold={250}
        hasMore={this.props.recommendedAnime.length <= 200}
      >
        <Grid>{RecommendedAnime}</Grid>
      </InfiniteScroll>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedAnime)
