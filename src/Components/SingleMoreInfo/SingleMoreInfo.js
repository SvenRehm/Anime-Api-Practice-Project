import React, { Component } from "react"
import { connect } from "react-redux"
import {
  requestSingleMoreInfo,
  requestSingleCategories
} from "./actions/requestSingleMoreInfo"
import { withRouter } from "react-router-dom"
// import { LayoutGrid } from "../Styled/index"
import styled from "styled-components"

const mapStateToProps = state => {
  const {
    isPending,
    youtubeVideoId,
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
    endDate,
    popularityRank,
    ratingRank
  } = state.requestSingleMoreInfo.singleMoreInfo.attributes

  return {
    youtubeVideoId: youtubeVideoId,
    popularityRank: popularityRank,
    ratingRank: ratingRank,
    singleCatergories: state.requestSingleMoreInfo.singleCatergories,
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
    onRequestSingleMoreInfo: animeid =>
      dispatch(requestSingleMoreInfo(animeid)),
    onRequestSingleCategories: animeid =>
      dispatch(requestSingleCategories(animeid))
  }
}
//loading
const GreyBackground = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(12, 100px);
  overflow: hidden;

  background: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  div {
    grid-column: 1/-1;
    grid-row: 1 / span 3;
    align-self: end;
    height: 100%;
    background-color: ${props => props.theme.primary};
    z-index: 2;
  }
`
//rankings at the top
const Rankings = styled.div`
  grid-column: 6 / span 5;
  grid-row: 4;
  align-self: start;
  margin-top: 1em;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  border-bottom: solid 2px ${props => props.theme.accent};
  h2 {
    margin-bottom: 1em;
    grid-column: 1 / span 3;
    font-weight: 300;
  }
  h2:last-child {
    grid-column: 4 / span 3;
    font-weight: 300;
    justify-content: end;
    text-align: center;
  }
`
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
    grid-row: 1 / span 3;
    align-self: end;
    z-index: 2;
    filter: brightness(50%);
    img {
      align-self: end;
      max-width: 100%;
      height: auto;
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
    margin-bottom: 1em;
    /* align-self: center; */
    align-self: end;
    z-index: 2;
  }

  div.text {
    align-self: start;

    grid-column: 6 / span 5;
    grid-row: 11 / span 4;

    line-height: 1.5em;
    font-size: 0.9em;
    margin-bottom: 4em;
    h2 {
      line-height: 2em;
    }
    p {
      color: white;
      overflow: hidden;
      /* white-space: nowrap; */
      text-overflow: ellipsis;
      max-height: 150px;
      /* add height */
    }
  }
  ul {
    grid-column: 6 / span 5;
    grid-row: 5;
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
  iframe {
    width: 100%;
    height: 100%;
    grid-column: 6 / span 5;
    grid-row: 7 / span 4;
    z-index: 2;
  }
`
//categories styles
const CategoriesList = styled.ul`
  float: left;
  list-style: none;
  li {
    float: left;
    list-style: none;
    text-align: center;
    background-color: #000000;

    width: 150px;

    text-decoration: none;
    margin-bottom: 5px;
    margin-right: 5px;
    width: 150px;
    line-height: 50px;
    a {
      text-decoration: none;
      color: #ffffff;
      display: block;
      &:hover {
        text-decoration: none;
        color: #000000;
        background-color: #33b5e5;
      }
    }
  }
`
class SingleMoreInfo extends Component {
  componentDidMount() {
    let id = this.props.match.params.id
    this.props.onRequestSingleMoreInfo(id)
    this.props.onRequestSingleCategories(id)
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
      averageRating,
      singleCatergories,
      popularityRank,
      ratingRank,
      youtubeVideoId
    } = this.props

    const category = singleCatergories.map((category, i) => {
      return (
        <li key={i}>
          <a href="/">{singleCatergories[i].attributes.title}</a>
        </li>
      )
    })

    return !this.props.isPending ? (
      <LayoutGrid>
        <div className="darkimg">
          <img alt="" src={coverImage === null ? null : coverImage.large} />
        </div>
        <img alt="" src={posterImage.medium} />

        <h1>{canonicalTitle}</h1>
        <Rankings>
          <h2>PopularityRank:#{popularityRank}</h2>
          <h2>RatingRank:#{ratingRank}</h2>
        </Rankings>
        <div className="text">
          <h2>Synopsis</h2>
          <p>{synopsis}</p>
          <p>load more</p>
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

        <CategoriesList>{category}</CategoriesList>
        <iframe
          title="animeintro"
          src={`https://www.youtube.com/embed/${youtubeVideoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </LayoutGrid>
    ) : (
      <GreyBackground>
        <div>
          <h1>Loading DATA</h1>
        </div>
      </GreyBackground>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SingleMoreInfo)
)
