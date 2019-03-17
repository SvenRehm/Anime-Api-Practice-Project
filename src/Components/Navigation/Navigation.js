import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledNav = styled.ul`
  z-index: 3;
  position: fixed;
  display: flex;
  width: 100%;
  height: 57px;
  padding: 0;
  list-style: none;
  align-items: center;
  padding: 0 10px;
  background-color: ${props => props.theme.lightgrey};
  font-size: 17px;

  li > a {
    text-decoration: none;
    color: ${props => props.theme.secondary};
    padding: 1.1em;
    font-size: 17px;
    &:hover {
      background: ${props => props.theme.darkgrey};
    }
    &:hover a {
      color: ${props => props.theme.accent};
    }
  }

  li:not(:last-child):not(.search) {
    margin-right: 10px;
  }
  input[type="text"] {
    padding: 6px;
    /* margin-left: 6px auto; */
    /* margin-top: 6px; */
    font-size: 17px;
    width: 400px;
    border: none;
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.darkgrey};
  }
  .search {
    margin-left: auto;
    margin-right: auto;
    padding: 0;

    &:hover {
      background: ${props => props.theme.lightgrey};
    }
    &:hover a {
      background-color: ${props => props.theme.lightgrey};
      color: ${props => props.theme.secondary};
    }
  }
`

const Navigation = ({ onSearchChange, onRequestSearchedAnime, search }) => {
  return (
    <StyledNav>
      <li>
        <Link to="/">Recommended</Link>
      </li>
      <li>
        <Link to={`/MyAnimeList`}> MyAnimeList</Link>
      </li>

      <li className="search">
        <input
          onChange={onSearchChange}
          type="text"
          placeholder="Search"
          name="search"
        />
        <Link to={`/search`} onClick={() => onRequestSearchedAnime(search)}>
          Search
        </Link>
      </li>

      <li>
        <Link to={`/Register`}> Register</Link>
      </li>
      <li>
        <Link to={`/Login`}> Login</Link>
      </li>
    </StyledNav>
  )
}

export default Navigation
