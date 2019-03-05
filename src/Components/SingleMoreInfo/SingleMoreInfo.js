import React, { Component } from "react"
import { connect } from "react-redux"
import { requestSingleMoreInfo } from "./actions/requestSingleMoreInfo"
import { withRouter } from "react-router-dom"
import { LayoutGrid } from "../Styled/index"

const mapStateToProps = state => {
  const {
    coverImage,
    posterImage,
    synopsis
  } = state.requestSingleMoreInfo.singleMoreInfo.attributes
  return {
    singleMoreInfo: state.requestSingleMoreInfo.singleMoreInfo,
    coverImage: coverImage,
    posterImage: posterImage,
    synopsis: synopsis,
    categories:
      state.requestSingleMoreInfo.singleMoreInfo.relationships.categories.links
        .related
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestSingleMoreInfo: animeid => dispatch(requestSingleMoreInfo(animeid))
  }
}

class SingleMoreInfo extends Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.onRequestSingleMoreInfo(id)
  }
  render() {
    return this.props.singleMoreInfo ? (
      <LayoutGrid>
        <div>
          <img alt="as2dff" src={this.props.coverImage.large} />
        </div>
        <img alt="asdff" src={this.props.posterImage.medium} />
        <p>{this.props.synopsis}</p>
      </LayoutGrid>
    ) : (
      <h1>Loading</h1>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleMoreInfo)
)
