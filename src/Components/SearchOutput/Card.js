import React from "react"

import { AnimeCard } from "../../Styled"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const CardC = ({ title, src, id, episodeCount, averageRating }) => {
  const isLoading = false

  console.log(src.large == null ? "hello" : src.large)

  return (
    <AnimeCard>
      <Link to={"/anime/" + id}>
        {isLoading ? <div className="load" /> : <img alt="" src={src} />}

        <h4>{title}</h4>
      </Link>
      <h5>{episodeCount} - Episodes</h5>
      <p>
        {" "}
        <FontAwesomeIcon className="star" icon="star" /> {averageRating}
      </p>
    </AnimeCard>
  )
}

export default CardC
