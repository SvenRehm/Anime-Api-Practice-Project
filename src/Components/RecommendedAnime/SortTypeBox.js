import React from "react"
import { Dropdown } from "../RecommendedAnime/SortStatus"

const SortTypeBox = ({ onChangeSelectType }) => {
  return (
    <Dropdown onChange={onChangeSelectType} name="SortTypeBox">
      <option value="tv">tv</option>
      <option value="movie">movie</option>
      <option value="special">special</option>
      <option value="ONA">ONA</option>
      <option value="OVA">OVA</option>
    </Dropdown>
  )
}

export default SortTypeBox
