import React from "react"
import Select from "react-select"
import styled from "styled-components"

const options = [
   { value: "finished", label: "Finished" },
   { value: "current", label: "Current" },
   { value: "upcoming", label: "Upcoming" }
]
// export const customStyles = {
//   control: (provided, state) => ({
//     ...provided,
//     width: "200px",
//     background: "#171717",
//     border: "2px solid #221f1f",
//     borderRadius: "none",
//     margin: "0",
//     boxShadow: state.isFocused ? null : null,
//     cursor: "pointer",

//     "&:hover": {
//       borderColor: null,
//       background: "#221f1f"
//     }
//   }),

//   menu: (provided, state) => ({
//     ...provided,
//     borderRadius: 0,
//     hyphens: "auto",
//     width: "200px",
//     marginTop: 0,
//     textAlign: "left"
//   }),

//   menuList: (provided, state) => ({
//     ...provided,
//     padding: 0
//   })
// }
const InLineBlock = styled.div`
   display: inline-block;
   margin: 5em 1em 0em 1em;
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

const SortStatus = ({ onChangeStatus }) => {
   return (
      <InLineBlock>
         <MultiSelect
            classNamePrefix="react-select"
            defaultValue={options[0]}
            onChange={onChangeStatus}
            options={options}
            isSearchable={false}
         />
      </InLineBlock>
   )
}

export default SortStatus
