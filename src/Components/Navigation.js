import React from "react"
import styled from "styled-components"

const StyledNav = styled.div`
  overflow: hidden;
  background-color: dark-grey;

  a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  span > a {
    float: right;
  }

  a:hover {
    background-color: #ddd;
    color: black;
  }

  div {
    float: left;
    margin-left: 20px;
  }

  input[type="text"] {
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
  }

  button {
    float: right;
    padding: 6px;
    margin-top: 8px;
    margin-right: 16px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background: #ccc;
  }
`

const Navigation = ({ onSearchChange, onRequestSearchedAnime, search }) => {
  return (
    <StyledNav>
      <a href="/">Home</a>
      <a href="/">About</a>
      <div>
        <input
          onChange={onSearchChange}
          type="text"
          placeholder="Search.."
          name="search"
        />
        <button onClick={()=>onRequestSearchedAnime(search)}>Submit</button>
      </div>
      <span>
        <a href="/">Log In</a>
      </span>
    </StyledNav>
  )
}

export default Navigation
