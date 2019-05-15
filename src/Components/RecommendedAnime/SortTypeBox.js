import React from "react"

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

const MultiSelect = styled(Select)`
  
  .react-select__single-value{
    color:${props => props.theme.primary_text};
  }
  .react-select__indicator-separator {
    background: ${props => props.theme.primary};
  }

  .react-select__option {
    background: ${props => props.theme.primary};
    cursor: pointer;
    color: ${props => props.theme.primary_text};
    &:hover {
      border-color: none;
      color:${props => props.theme.primary_text};
      background: ${props => props.theme.primary_light};
    }
  }
  .react-select__control {
    background: ${props => props.theme.primary};
    width: 200px;
    color: ${props => props.theme.primary_text};
    border-color:${props => props.theme.primary_light2};
    /* border: 2px solid ${props => props.theme.border}; */
    border-radius: 0;
  
    margin: 0;
    cursor: pointer;
    box-shadow: none;
    &:hover{
      border-color:${props => props.theme.primary_light2};
      /* border-color:${props => props.theme.border}; */
      color:${props => props.theme.primary_text};
    }
    &:focus{
      border-color:${props => props.theme.primary_light2};
      /* border-color:${props => props.theme.border}; */
      color:${props => props.theme.primary_text};
    }
  }
  .react-select__menu {
    border-radius: 0;
    hyphens: auto;
    width: 200px;
    margin-top: -1px;
   border:1px solid;
    text-align: left;
    color: ${props => props.theme.primary_text};
    background: ${props => props.theme.primary};
    border-color:${props => props.theme.primary_light2};
    
    
      }
    .react-select__menu-list{
      border-color:${props => props.theme.primary_light2};
    }
  .react-select__option--is-selected{
    color:${props => props.theme.primary_text};
    background: ${props => props.theme.primary_dark};
  }
.react-select__control--is-focused{
  border-color:${props => props.theme.primary_medium};
  box-shadow:none;
  /* border-color:${props => props.theme.border}; */
  color:${props => props.theme.primary_text};
}


  .react-select__menu-list {
    padding:0;

 
  }
  .react-select__singleValue {
    color:${props => props.theme.primary_text};
  }
`
const SortTypeBox = ({ onChangeSelectType }) => {
   return (
      <InLineBlock>
         <MultiSelect
            classNamePrefix="react-select"
            defaultValue={options[0]}
            onChange={onChangeSelectType}
            options={options}
            isSearchable={false}
         />
      </InLineBlock>
   )
}

export default SortTypeBox
