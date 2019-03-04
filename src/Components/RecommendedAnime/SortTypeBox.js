import React from "react"
// import styled from "styled-components"

const SortTypeBox = ({ onChangeSelectType }) => {
  return (
    <div>
      <select onChange={onChangeSelectType} name="SortTypeBox">
        <option value="tv">tv</option>
        <option value="movie">movie</option>
        <option value="special">special</option>
        <option value="ONA">ONA</option>
        <option value="OVA">OVA</option>
      </select>
    </div>
  )
}

export default SortTypeBox
