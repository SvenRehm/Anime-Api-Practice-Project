import React from "react"

import { Link } from "react-router-dom"
import { AnimeCard } from "../../Styled"

const RecommendedAnimeCard = ({
   src,
   title,
   averageRating,
   episodeCount,
   id,
   ratingRank,
   isLoading,

   style
}) => {
   return (
      <div>
         <AnimeCard style={style}>
            <Link to={"/anime/" + id}>
               {/* {isLoading ? <div className="load" /> : <img alt="" src={src} />} */}
               <img alt="" src={src} />
               <h4>{title} </h4>
            </Link>
            <h5>{episodeCount} - Episodes</h5>
            <p>{averageRating}</p>
         </AnimeCard>
      </div>
   )
}

export default RecommendedAnimeCard
