import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledNav = styled.div`
  overflow: hidden;
  position: fixed;
  z-index: 3;
  width: 100%;
  background-color: ${props => props.theme.primary};
  border-bottom: solid 1px ${props => props.theme.secondary};

  a {
    float: left;
    display: block;
    color: ${props => props.theme.secondary};
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 1em;
    transition: all 350ms ease-in-out;
    margin: 0 5px;
  }

  span > a {
    float: right;
  }

  a:hover {
    color: ${props => props.theme.accent};
  }

  input[type="text"] {
    float: left;
    padding: 6px;
    margin-top: 6px;
    font-size: 17px;
    border: none;
    border-left: 1px solid black;
  }
  input[type="text"]:focus {
    outline: none;
  }
`

const Navigation = ({ onSearchChange, onRequestSearchedAnime, search }) => {
  return (
    <StyledNav>
      <a href="/">Recommended</a>
      <Link to={`/MyAnimeList`}> MyAnimeList</Link>
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
