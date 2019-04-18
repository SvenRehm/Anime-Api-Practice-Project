import React from "react"
import CardC from "./Card"

import { Grid } from "../../Styled"

const CardList = ({ filteredAnime }) => {
  return (
    <Grid>
      {filteredAnime
        ? filteredAnime.map((user, i) => {
            return (
              <CardC
                key={i}
                id={filteredAnime[i].id}
                synopsis={filteredAnime[i].synopsis}
                title={filteredAnime[i].attributes.canonicalTitle}
                src={filteredAnime[i].attributes.posterImage.medium}
                url={filteredAnime[i].url}
                averageRating={filteredAnime[i].attributes.averageRating}
                episodeCount={filteredAnime[i].attributes.episodeCount}
              />
            )
          })
        : null}
    </Grid>
  )
}

export default CardList
