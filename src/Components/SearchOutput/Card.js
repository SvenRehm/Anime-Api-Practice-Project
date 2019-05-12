import React from "react"

import { AnimeCard } from "../../Styled"
import { Link } from "react-router-dom"

const CardC = ({ title, src, id, episodeCount, averageRating }) => {
   const isLoading = false

   return (
      <AnimeCard>
         <Link to={"/anime/" + id}>
            {isLoading ? <div className="load" /> : <img alt="" src={src} />}

            <h4>{title}</h4>
         </Link>
         <h5>{episodeCount} - Episodes</h5>
         <p>{averageRating}</p>
      </AnimeCard>
   )
}

export default CardC
