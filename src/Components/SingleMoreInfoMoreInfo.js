import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { requestSingleMoreInfo } from "../actions/requestSingleMoreInfo"
import { withRouter } from "react-router-dom"

const mapStateToProps = state => {
  const {
    isPending,
    error,
    attributes,
    posterImage,
    coverImage,
    titles,
    relationships
  } = state.requestSingleMoreInfo.singleMoreInfo

  return {
    id: state.requestSingleMoreInfo.id,
    type: state.requestSingleMoreInfo.type,
    isPending: isPending,
    attributes: {
      ...attributes
    },
    posterImage: {
      ...posterImage
    },
    coverImage: { ...coverImage },
    titles: {
      ...titles
    },
    relationships: {
      ...relationships
    },
    error: error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestSingleMoreInfo: animeid => dispatch(requestSingleMoreInfo(animeid))
  }
}

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`

class SingleMoreInfo extends Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.onRequestSingleMoreInfo(id)
  }
  render() {
    return (
      <LayoutGrid>
        <div>
          <img alt="asdff" src={this.props.posterImage.large} />

          <h3>{this.props.id}</h3>
          <h3>{this.props.attributes.synopsis}</h3>
        </div>
      </LayoutGrid>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleMoreInfo)
)
