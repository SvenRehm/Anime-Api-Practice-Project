import React from "react"
import styled from "styled-components"

const StyledRecommendedAnimeCard = styled.div`
  position: relative;
  /* border-bottom: 1px solid grey; */

  img {
    width: 100%;
    cursor: pointer;
  }
  p {
    font-size: 0.7em;
    position: absolute;
    right: 0;
    padding: 5px;
    bottom: 45px;
    color: white;
    background: black;
  }
  h4 {
    padding: 0;
    font-size: 0.8em;
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }
  h4:hover {
    color: red;
  }
  h5 {
    font-weight: 400;
    font-size: 0.7em;
  }
`
const RecommendedAnimeCard = ({ src, title, averageRating, episodeCount }) => {
  return (
    <StyledRecommendedAnimeCard>
      <img alt="animeimg" src={src} />
      <h4>{title}</h4>
      <h5>{episodeCount} - Episodes</h5>
      <p> Rating:{averageRating}</p>
    </StyledRecommendedAnimeCard>
  )
}

export default RecommendedAnimeCard
