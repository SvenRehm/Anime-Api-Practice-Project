import React from "react"
import { customStyles } from "../RecommendedAnime/SortStatus"
import Select from "react-select"
import styled from "styled-components"
const options = [
  { value: "popularityRank", label: "PopularityRank" },
  { value: "averageRating", label: "AverageRating" },
  { value: "-averageRating", label: "AverageRating" }
]

const InLineBlock = styled.div`
  display: inline-block;
  margin: 0 1em;
`
const SortFilterBox = ({ onChangeSelect }) => {
  return (
    <InLineBlock>
      <Select
        styles={customStyles}
        defaultValue={options[0]}
        onChange={onChangeSelect}
        options={options}
      />
    </InLineBlock>
  )
}

export default SortFilterBox
