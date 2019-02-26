import React, { Component } from "react"
import { connect } from "react-redux"
import { requestRecommendedAnime } from "../actions/requestRecommendedAnime"
import { Grid } from "./CardList"
import RecommendedAnimeCard from "./RecommendedAnimeCard"

const mapStateToProps = state => {
  const {
    recommendedAnime,
    subtype,
    episodeCount,
    isPending,
    error
  } = state.requestRecommendedAnime
  return {
    recommendedAnime: recommendedAnime,
    subtype: subtype,
    isPending: isPending,
    episodeCount: episodeCount,
    error: error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestRecommendedAnime: (subtype, sort) =>
      dispatch(requestRecommendedAnime(subtype, sort))
  }
}

class RecommendedAnime extends Component {
  componentDidMount() {
    this.props.onRequestRecommendedAnime(this.props.subtype, "popularityRank")
  }

  render() {
    const { recommendedAnime } = this.props

    return (
      <Grid>
        {recommendedAnime.map((category, i) => {
          return (
            <RecommendedAnimeCard
              key={i}
              src={recommendedAnime[i].posterImage}
              title={recommendedAnime[i].cannontitle}
              averageRating={recommendedAnime[i].averageRating}
              episodeCount={recommendedAnime[i].episodeCount}
            />
          )
        })}
      </Grid>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedAnime)
