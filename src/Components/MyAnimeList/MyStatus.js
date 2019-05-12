import React from "react"

import Select from "react-select"
import styled from "styled-components"

const options = [
   { value: "Currently Watching", label: "Currently Watching" },
   { value: "Want to Watch", label: "Want to Watch" },
   { value: "On Hold", label: "On Hold" },
   { value: "Completed", label: "Completed" },
   { value: "Dropped", label: "Dropped" }
]

const MultiSelect = styled(Select)`
.react-select__indicator-separator{
  display:none;
  }

  .react-select__dropdown-indicator{
padding:1px;
  }
  .react-select__single-value{
    color:${props => props.theme.primary_text};
    font-size:11px;
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
    /* background: ${props => props.theme.primary}; */
    background: ${props => props.theme.primary};
    min-height:30px;
    width: 135px;
  
    color: ${props => props.theme.primary_text};
    /* border-color:${props => props.theme.border}; */
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
    font-size:11px;
    min-height:30px;
    width: 135px;
    border-radius: 0;
    hyphens: auto;
    /* width: 200px; */
    margin-top: 0;
   
    text-align: left;
    color: ${props => props.theme.primary_text};
    background: ${props => props.theme.primary};
    
  }
  .react-select__option--is-selected{
    color:${props => props.theme.primary_text};
    background: ${props => props.theme.selected};
  }
  .react-select__value-container{
    padding-left :4px;
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
    color: ${props => props.theme.primary_text};
  }


  
`

const MyStatus = ({ onChangeStatus, defaultValue, userId, animeid }) => {
   const defaultValueObject = {
      label: defaultValue,
      value: defaultValue
   }

   return (
      <MultiSelect
         classNamePrefix="react-select"
         defaultValue={defaultValueObject}
         onChange={e => onChangeStatus(userId, animeid, e.value)}
         options={options}
         isSearchable={false}
      />
   )
}

export default MyStatus

// export default connect(
//    mapStateToProps,
//    mapDispatchToProps
// )(MyStatus)
