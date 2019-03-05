import React from "react"
import { Dropdown } from "../RecommendedAnime/SortStatus"

const SortFilterBox = ({ onChangeSelect }) => {
  return (
    <Dropdown onChange={onChangeSelect} id="business" name="business">
      <option value="popularityRank">popularityRank</option>
      <option value="averageRating">averageRating</option>
      <option value="-averageRating">-averageRating</option>
    </Dropdown>
  )
}

export default SortFilterBox
