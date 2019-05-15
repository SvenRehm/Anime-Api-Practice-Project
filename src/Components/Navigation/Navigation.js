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
    color: ${props => props.theme.primary_text};
    background: ${props => props.theme.primary};
    padding: 1.1em;
    font-size: 17px;
   
    transition:color 150ms ease-in;
    &:hover {
      transition:color 150ms ease-in;
      /* background: ${props => props.theme.hover}; */
      /* color: ${props => props.theme.accent}; */
      color: ${props => props.theme.secondary_light};
      /* background: ${props => props.theme.primary_light}; */

    }
  }

  input[type="text"] {
    padding: 6px;

    font-size: 17px;
    width: 400px;
    margin: 0;
    color: ${props => props.theme.primary_text};
    background: ${props => props.theme.primary_dark};
    border:none;
  
  }
  .search {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    padding: 0;

    a {
     
      display: inline-block;
    
      font-size: 14px;
      padding: 6px;

      background: ${props => props.theme.primary_light};

      &:hover {
        /* color: ${props => props.theme.secondary_light}; */
        background: ${props => props.theme.primary_light};
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
               <Link
                  to={`/search`}
                  onClick={() => onRequestSearchedAnime(search)}
               >
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
