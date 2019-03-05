import React from "react"
import styled from "styled-components"

export const Dropdown = styled.select`
  width: 200px;
  appearance: none;
  border: none;
  height: 40px;
  padding-left: 10px;

  color: ${props => props.theme.primary};
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  margin-right: 1em;
  &:focus::-ms-value {
    background-color: transparent;
  }

  option {
    color: #666;
  }
`

const SortStatus = ({ onChangeStatus }) => {
  return (
    <Dropdown onChange={onChangeStatus} name="business">
      <option value="finished">finished</option>
      <option value="current">current</option>

      <option value="upcoming">upcoming</option>
    </Dropdown>
  )
}

export default SortStatus
