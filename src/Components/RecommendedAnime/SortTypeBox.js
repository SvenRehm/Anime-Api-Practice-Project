import React from "react"
import { customStyles } from "../RecommendedAnime/SortStatus"
import Select from "react-select"
import styled from "styled-components"
const options = [
  { value: "tv", label: "Tv" },
  { value: "movie", label: "Movie" },
  { value: "special", label: "Special" },
  { value: "ONA", label: "ONA" },
  { value: "OVA", label: "OVA" }
]
const InLineBlock = styled.div`
  display: inline-block;
  margin: 0 1em;
`
const SortTypeBox = ({ onChangeSelectType }) => {
  return (
    <InLineBlock>
      <Select
        styles={customStyles}
        defaultValue={options[0]}
        onChange={onChangeSelectType}
        options={options}
      />
    </InLineBlock>
  )
}

export default SortTypeBox
