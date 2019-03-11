import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledRecommendedAnimeCard = styled.div`
  position: relative;
  /* border-bottom: 1px solid grey; */

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  p {
    font-size: 0.7em;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;

    color: white;
    background: black;
  }
  h4 {
    font-size: 0.91em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 180px;
  }
  h5 {
    font-weight: 400;
    font-size: 0.7em;
    color: ${props => props.theme.secondary};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.secondary};
    padding: 0;
    font-size: 0.8em;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    color: ${props => props.theme.color};
    &:hover {
      color: ${props => props.theme.accent};
    }
  }
`
const RecommendedAnimeCard = ({
  src,
  title,
  averageRating,
  episodeCount,
  id
}) => {
  return (
    <StyledRecommendedAnimeCard>
      <Link to={"/anime/" + id}>
        <img alt="" src={src} />

        <h4>{title}</h4>
      </Link>
      <h5>{episodeCount} - Episodes</h5>
      <p> Rating: {averageRating}</p>
    </StyledRecommendedAnimeCard>
  )
}

export default RecommendedAnimeCard