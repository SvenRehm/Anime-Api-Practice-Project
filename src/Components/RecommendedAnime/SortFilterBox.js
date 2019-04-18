import React from "react"

import Select from "react-select"
import styled from "styled-components"
const options = [
  { value: "popularityRank", label: "PopularityRank" },
  { value: "averageRating", label: "AverageRating" },
  { value: "-averageRating", label: "AverageRating" }
]



const MultiSelect = styled(Select)`
  
  .react-select__single-value{
    color:${props => props.theme.hovertext};
  }
  .react-select__indicator-separator {
    background: ${props => props.theme.primary};
  }

  .react-select__option {
    background: ${props => props.theme.primary};
    cursor: pointer;
    color: ${props => props.theme.secondary};
    &:hover {
      border-color: none;
  color:${props => props.theme.hovertext};
      background: ${props => props.theme.hover};
    }
  }
  .react-select__control {
    background: ${props => props.theme.primary};
    width: 200px;
    color: ${props => props.theme.secondary};
    border-color:${props => props.theme.border};
    /* border: 2px solid ${props => props.theme.border}; */
    border-radius: 0;
  
    margin: 0;
    cursor: pointer;
    box-shadow: none;
    &:hover{
      border-color:${props => props.theme.border};
      color:${props => props.theme.hovertext};
    }
  }
  .react-select__menu {
    border-radius: 0;
    hyphens: auto;
    width: 200px;
    margin-top: 0;
   
    text-align: left;
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.primary};
  }
  .react-select__option--is-selected{
    color:${props => props.theme.hovertext};
    background: ${props => props.theme.selected};
  }
.react-select__control--is-focused{
  box-shadow:none;
  border-color:${props => props.theme.border};
  color:${props => props.theme.hovertext};
}


  .react-select__menu-list {
    padding:0;
 
  }
  .react-select__singleValue {
    color: ${props => props.theme.secondary};
  }
`
const InLineBlock = styled.div`
  display: inline-block;
`
const SortFilterBox = ({ onChangeSelect }) => {
  return (
    <InLineBlock>
      <MultiSelect
        classNamePrefix="react-select"
        defaultValue={options[0]}
        onChange={onChangeSelect}
        options={options}
        isSearchable={false}
      />
    </InLineBlock>
  )
}

export default SortFilterBox
