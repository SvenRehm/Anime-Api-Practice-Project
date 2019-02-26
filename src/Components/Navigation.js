import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledNav = styled.div`
  overflow: hidden;
  background-color: dark-grey;
  border-bottom: solid 1px black;
  a {
    float: left;
    display: block;
    color: black;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    border-left:1px solid black;
    transition: all 350ms ease-in-out;
    margin:0 10px;
  }

  span > a {
    float: right;
  }

  a:hover {
    color: white;
    background: black;
  }

  input[type="text"] {
    float: left;
    padding: 6px;
    margin-top: 8px;
    font-size: 17px;
    border: none;
    border-left: 1px solid black;
  }
  input[type="text"]:focus {
    outline: none;
  }

  button {
    float: right;
    padding: 6px;
    margin-top: 8px;
    margin-right: 16px;
    color: white;
    background: black;
    font-size: 17px;
    border: none;
    cursor: pointer;
  }
  button:focus {
    outline: black;
  }
  button:hover {
    background: white;
    border: solid 1px black;
    color: black;
  }
`

const Navigation = ({ onSearchChange, onRequestSearchedAnime, search }) => {
  return (
    <StyledNav>
      <a href="/">Recommended</a>
      <div>
        <input
          onChange={onSearchChange}
          type="text"
          placeholder="Search.."
          name="search"
        />

        <Link to={`/search`} onClick={() => onRequestSearchedAnime(search)}>
          Search
        </Link>
      </div>
      <span>
        <a href="/">Log In</a>
      </span>
    </StyledNav>
  )
}

export default Navigation
