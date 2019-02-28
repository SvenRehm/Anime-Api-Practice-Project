import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { requestSingleMoreInfo } from "./actions/requestSingleMoreInfo"
import { withRouter } from "react-router-dom"


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

const LayoutGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(10, 100px);
  overflow: hidden;
  div {
    grid-column: 1/-1;
    grid-row: 1 / span;
    img {
      max-width: 100%;
    }
  }
  img {
    max-width: 90%;
    grid-column: 2 / span 3;
    grid-row: 3 / span 4;
  }
  p {
    grid-column: 6 / span 4;
    grid-row: 2;
  }
`

class SingleMoreInfo extends Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.onRequestSingleMoreInfo(id)
  }
  render() {
    console.log(this.props.coverImage.medium)
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
