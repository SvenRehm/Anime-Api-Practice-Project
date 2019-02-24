import React, { Component } from "react"
import { connect } from "react-redux"
import { requestRecommendedAnime } from "../actions/requestRecommendedAnime"
import { Grid } from "./CardList"
const mapStateToProps = state => {
  return {
    recommendedAnime: state.requestRecommendedAnime.recommendedAnime,
    subtype: state.requestRecommendedAnime.subtype,
    isPending: state.requestRecommendedAnime.isPending,
    error: state.requestRecommendedAnime.error
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
            <div key={i}>
              <img alt="animeimg" src={recommendedAnime[i].posterImage} />
              <p>
                {recommendedAnime[i].cannontitle}
                {recommendedAnime[i].averageRating}
              </p>
            </div>
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
