import React from "react"
import CardC from "./Card"
import styled from "styled-components"

export const Grid = styled.div`
  display: grid;
  margin: 1em;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

`
const CardList = ({ filteredAnime }) => {
  return (
    <Grid>
      {filteredAnime
        ? filteredAnime.map((user, i) => {
            return (
              <CardC
                key={i}
                synopsis={filteredAnime[i].synopsis}
                title={filteredAnime[i].attributes.titles.en_jp}
                imgUrl={filteredAnime[i].attributes.posterImage.large}
                url={filteredAnime[i].url}
              />
            )
          })
        : null}
    </Grid>
  )
}

export default CardList