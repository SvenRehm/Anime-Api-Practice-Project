import React from "react"
import Select from "react-select"
import styled from "styled-components"

const options = [
  { value: "finished", label: "Finished" },
  { value: "current", label: "Current" },
  { value: "upcoming", label: "Upcoming" }
]
export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    width: "200px",
    display: "inline-block",
    color: state.isSelected ? "white" : "rgb(255, 255, 255, 0.5)",
    background: state.isSelected ? "#221f1f" : "#171717",
    border: "none",
    "&:hover": {
      color: "white",
      background: "#221f1f"
    }
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    background: "rgba(255, 255, 255, 0.5)"
  }),
  control: (provided, state) => ({
    ...provided,
    width: "200px",
    background: "#171717",
    border: "2px solid #221f1f",
    borderRadius: "none",
    margin: "0",
    boxShadow: state.isFocused ? null : null,
    cursor:"pointer",
    
    "&:hover": {
      borderColor: null,
      background: "#221f1f"
    }
  }),

  menu: (provided, state) => ({
    ...provided,
    borderRadius: 0,
    hyphens: "auto",
    width: "200px",
    marginTop: 0,

    textAlign: "left"
  }),

  menuList: (provided, state) => ({
    ...provided,
    padding: 0
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "white"
  })
}
const InLineBlock = styled.div`
  display: inline-block;
  margin: 2em 1em;
`
const SortStatus = ({ onChangeStatus }) => {
  return (
    <InLineBlock>
      <Select
        styles={customStyles}
        defaultValue={options[0]}
        onChange={onChangeStatus}
        options={options}
      />
    </InLineBlock>

    // <Dropdown onChange={onChangeStatus} name="business">
    //   <option value="finished">finished</option>
    //   <option value="current">current</option>

    //   <option value="upcoming">upcoming</option>
    // </Dropdown>
  )
}

export default SortStatus
