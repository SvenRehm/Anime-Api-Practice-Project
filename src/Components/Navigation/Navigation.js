import React, { Component } from "react"
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
  /* background-color: transparent; */
  top: 0;
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
    margin-right: 0;
  }
  input[type="text"] {
    padding: 6px;

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
class Navigation extends Component {
  onSubmit = e => {
    e.preventDefault()

    this.props.onLogout()
  }

  render() {
    const {
      onSearchChange,
      onRequestSearchedAnime,
      search,
      loggedIn
    } = this.props

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
            onKeyPress={event => {
              var code = event.keyCode || event.which
              if (code === 13) {
                onRequestSearchedAnime(search)
              }
            }}
          />
          <Link to={`/search`} onClick={() => onRequestSearchedAnime(search)}>
            Search
          </Link>
        </li>

        <li>
          <Link to={`/Register`}> Register</Link>
        </li>

        <li>
          {!loggedIn ? (
            <Link to={`/Login`}> Login</Link>
          ) : (
            <a href="/" onClick={this.onSubmit}>
              Logout
            </a>
          )}
        </li>
      </StyledNav>
    )
  }
}

// const Navigation = ({
//   onSearchChange,
//   onRequestSearchedAnime,
//   search,
//   loggedIn,
//   onLogout
// }) => {

export default Navigation
