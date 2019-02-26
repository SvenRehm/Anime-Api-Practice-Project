import React, { Component } from "react"
import { connect } from "react-redux"
import { requestRecommendedAnime } from "../actions/requestRecommendedAnime"
import { Grid } from "./CardList"
import RecommendedAnimeCard from "./RecommendedAnimeCard"

const mapStateToProps = state => {
  const {
    id,
    recommendedAnime,
    subtype,
    episodeCount,
    isPending,
    error
  } = state.requestRecommendedAnime
  
  return {
    id: id,
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

    return <Grid>{RecommendedAnime}</Grid>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedAnime)
