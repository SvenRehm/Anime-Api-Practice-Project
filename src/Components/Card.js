import React from "react"
import styled from "styled-components"
const Card = styled.div`

  a img {
    width: 100%;
  }
`

const CardC = ({ title, imgUrl }) => {
  return (
    <Card>
      <a href="/">
        <img alt="animeimage " src={imgUrl} />
      </a>
      <h3>{title}</h3>
    </Card>
  )
}

export default CardC
