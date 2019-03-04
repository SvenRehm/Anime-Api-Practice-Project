import React from "react"
// import styled from "styled-components"

const SortFilterBox = ({ onChangeSelect }) => {
  return (
    <div>
      <select onChange={onChangeSelect} id="business" name="business">
        <option value="popularityRank">popularityRank</option>
        <option value="averageRating">averageRating</option>
        <option value="-averageRating">-averageRating</option>
   
      </select>
    </div>
  )
}

export default SortFilterBox
