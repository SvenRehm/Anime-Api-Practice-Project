import React from "react"

import { Link } from "react-router-dom"
import { AnimeCard } from "../../Styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const RecommendedAnimeCard = ({
  src,
  title,
  averageRating,
  episodeCount,
  id,
  ratingRank,
  isLoading,
  // opacity
  style
}) => {
 
  return (
    <AnimeCard style={style}>
      <Link to={"/anime/" + id}>
        {/* {isLoading ? <div className="load" /> : <img alt="" src={src} />} */}
        <img alt="" src={src} />
        <h4>{title}</h4>
      </Link>
      <h5>{episodeCount} - Episodes</h5>
      <p>
        <FontAwesomeIcon className="star" icon="star" /> {averageRating}
      </p>
    </AnimeCard>
  )
}

export default RecommendedAnimeCard
