import React, { Component } from "react"
import { connect } from "react-redux"
import { requestSingleMoreInfo } from "./actions/requestSingleMoreInfo"
import { withRouter } from "react-router-dom"
// import { LayoutGrid } from "../Styled/index"
import styled from "styled-components"

const mapStateToProps = state => {
  const {
    isPending,
    coverImage,
    posterImage,
    averageRating,
    synopsis,
    canonicalTitle,
    subtype,
    status,
    ageRatingGuide,
    episodeCount,
    startDate,
    endDate
  } = state.requestSingleMoreInfo.singleMoreInfo.attributes
  return {
    isPending: isPending,
    singleMoreInfo: state.requestSingleMoreInfo.singleMoreInfo,
    coverImage: coverImage,
    averageRating: averageRating,
    posterImage: posterImage,
    synopsis: synopsis,
    status: status,
    episodeCount: episodeCount,
    ageRatingGuide: ageRatingGuide,
    subtype: subtype,
    canonicalTitle: canonicalTitle,
    startDate: startDate,
    endDate: endDate,
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

//SingleMoreInfo
export const LayoutGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(10, 100px);
  overflow: hidden;

  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};

  div.darkimg {
    grid-column: 1/-1;
    grid-row: 1 / span;
    filter: brightness(50%);
    img {
      max-width: 100%;
    }
  }
  img {
    max-width: 80%;
    grid-column: 3 / span 3;
    grid-row: 3 / span 4;
    align-self: end;
    z-index: 2;
  }

  h1 {
    grid-column: 6 / span 4;
    grid-row: 3;
    /* align-self: center; */
    align-self: end;
    z-index: 2;
    color: ${props => props.theme.third};
  }
  div.text {
    align-self: start;
    grid-column: 6 / span 5;
    grid-row: 4;
    margin-top: 2em;
    line-height: 1.5em;
    font-size: 0.9em;
    p {
      color: white;
      overflow: hidden;
      /* white-space: nowrap; */
      text-overflow: ellipsis;
      max-height: 150px;
      /* add height */
    }
  }
  h2 {
    grid-column: 6 / span 5;
    grid-row: 6;
  }
  table {
    color: white;
    max-width: 80%;
    grid-column: 3 / span 3;
    grid-row: 7 / span 5;
    text-transform: uppercase;
    font-size: 0.7em;
    .right-align {
      text-align: right;
      font-weight: 700;
    }
  }
`

class SingleMoreInfo extends Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.onRequestSingleMoreInfo(id)
  }

  render() {
    const {
      canonicalTitle,
      synopsis,
      posterImage,
      coverImage,
      subtype,
      status,
      episodeCount,
      ageRatingGuide,
      startDate,
      endDate,
      averageRating
    } = this.props

    return !this.props.isPending ? (
      <LayoutGrid>
        <div className="darkimg">
          <img alt="" src={coverImage.large} />
        </div>
        <img alt="" src={posterImage.medium} />

        <h1>{canonicalTitle}</h1>
        <div className="text">
          <p> {synopsis}</p>
          <p>more</p>
        </div>
        <table className="table-styles">
          <tbody>
            <tr>
              <td>TYPE</td>
              <td className="right-align">{subtype}</td>
            </tr>

            <tr>
              <td>STATUS</td>
              <td className="right-align">{status}</td>
            </tr>
            <tr>
              <td>averageRating</td>
              <td className="right-align">{averageRating}</td>
            </tr>
            <tr>
              <td>EPISODES</td>
              <td className="right-align">{episodeCount}</td>
            </tr>

            <tr>
              <td>startDate</td>
              <td className="right-align">{startDate}</td>
            </tr>
            <tr>
              <td>endDate</td>
              <td className="right-align">{endDate}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td className="right-align">{ageRatingGuide}</td>
            </tr>
          </tbody>
        </table>
        <h2>moasdadre</h2>
      </LayoutGrid>
    ) : (
      <h1>Loading DATA</h1>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleMoreInfo)
)
