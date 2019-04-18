import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { getJwt } from "../helpers/jwt"

const StyledNav = styled.ul`
  z-index: 3;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 57px;
  padding: 0;
  list-style: none;
  background: ${props => props.theme.primary};
  top: 0;
  font-weight: 500;
  font-size: 17px;
  overflow: hidden;
  box-shadow: 0px 13px 50px -25px rgba(0, 0, 0, 1);
  li > a {
    text-decoration: none;
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.primary};
    padding: 1.1em;
    font-size: 17px;
    &:hover {
      /* background: ${props => props.theme.hover}; */
      /* color: ${props => props.theme.accent}; */
      color: ${props => props.theme.primary};
      background: ${props => props.theme.accent};

    }
  }

  input[type="text"] {
    padding: 6px;

    font-size: 17px;
    width: 400px;
    margin: 0;
    color: ${props => props.theme.secondary};
    background: ${props => props.theme.background};
    border: 1px solid ${props => props.theme.border};
  }
  .search {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 0;

    a {
     

      display: inline-block;
      border: 1px solid ${props => props.theme.border};
      font-size: 15px;
      padding: 6px;

      background: ${props => props.theme.hover};

      &:hover {
        color: ${props => props.theme.hovertext};
        background: ${props => props.theme.hover};
      }
    }
  }
`
class Navigation extends Component {
  onSubmit = e => {
    e.preventDefault()

    this.props.onLogout()
  }

  render() {
    const jwt = getJwt()
    const { onSearchChange, onRequestSearchedAnime, search } = this.props

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
          {!jwt ? (
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
