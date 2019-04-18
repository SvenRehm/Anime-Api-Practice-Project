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

import { Grid } from "../../Styled"
import { GooSpinner } from "react-spinners-kit"
import { Loader } from "../../Styled/animation"

import { Trail, config } from "react-spring/renderprops"

const mapStateToProps = state => {
  const {
    id,
    recommendedAnime,
    subtype,
    episodeCount,
    isLoading,
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

    isLoading: isLoading,
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
      this.props.onRequestRecommendedAnime(
        newProps.subtype,
        this.props.sort,
        this.props.status
      )
    }

    //sataus of the animes (finished/current..)
    if (newProps.status !== this.props.status) {
      this.props.onRequestRecommendedAnime(
        this.props.subtype,
        this.props.sort,
        newProps.status
      )
    }
  }

  render() {
    const { recommendedAnime, isLoading } = this.props

    //mapping over received anime

    // const RecommendedAnime = recommendedAnime.map((category, i) => {
    //   // let count = recommendedAnime.length < 21 ? true : false
    //   // const delay = count ? (150 * i) / 3 : (100 * i) / 10

    //   return (
    //     // <Spring
    //     //   key={i}
    //     //   delay={delay}
    //     //   config={config.slow}
    //     //   from={{ opacity: 0 }}
    //     //   to={{ opacity: 1 }}
    //     // >
    //     //   {props => (
    //     <RecommendedAnimeCard
    //       // style={props}
    //       key={i}
    //       id={recommendedAnime[i].id}
    //       src={recommendedAnime[i].posterImage}
    //       title={recommendedAnime[i].cannontitle}
    //       averageRating={recommendedAnime[i].averageRating}
    //       episodeCount={recommendedAnime[i].episodeCount}
    //       ratingRank={recommendedAnime[i].ratingRank}
    //       isLoading={isLoading}
    //     />
    //     // )
    //     // }
    //     // </Spring>
    //   )
    // })

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
        threshold={700}
        loader={
          <Loader className="loader" key={0}>
            <GooSpinner size={100} />
          </Loader>
        }
        hasMore={this.props.recommendedAnime.length <= 100}
      >
        <SortStatus onChangeStatus={this.props.onChangeStatus} />
        <SortTypeBox onChangeSelectType={this.props.onChangeSelectType} />
        <SortFilterBox onChangeSelect={this.props.onChangeSelect} />
        <Grid>
          <Trail
            items={recommendedAnime}
            keys={recommendedAnime => recommendedAnime.id}
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
            config={config.stiff}
          >
            {recommendedAnime => props => (
              <RecommendedAnimeCard
                style={props}
                key={recommendedAnime.id}
                id={recommendedAnime.id}
                src={recommendedAnime.posterImage}
                title={recommendedAnime.cannontitle}
                averageRating={recommendedAnime.averageRating}
                episodeCount={recommendedAnime.episodeCount}
                ratingRank={recommendedAnime.ratingRank}
                isLoading={isLoading}
              />
            )}
          </Trail>
        </Grid>
        {/* <Grid>{RecommendedAnime}</Grid> */}
      </InfiniteScroll>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedAnime)
