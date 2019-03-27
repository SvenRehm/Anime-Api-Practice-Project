import React from "react"

import { Link } from "react-router-dom"
import { AnimeCard } from "../../Styled"

const RecommendedAnimeCard = ({
  src,
  title,
  averageRating,
  episodeCount,
  id,
  isLoading
}) => {
  return (
    <AnimeCard>
      <Link to={"/anime/" + id}>
        {isLoading ? <div className="load" /> : <img alt="" src={src} />}

        <h4>{title}</h4>
      </Link>
      <h5>{episodeCount} - Episodes</h5>
      <p> Rating: {averageRating}</p>
    </AnimeCard>
  )
}

export default RecommendedAnimeCard
