import React, { Component } from "react"
import { connect } from "react-redux"
import {
   changeSearchField,
   requestSearchedAnime
} from "./Components/SearchOutput/actions"
import CardList from "./Components/SearchOutput/CardList"
import Navigation from "./Components/Navigation/Navigation"
// import Categorys from "./Components/Categorys"
import RedommendedAnime from "./Components/RecommendedAnime/RecommendedAnime"
import SingleMoreInfo from "./Components/SingleMoreInfo/SingleMoreInfo"
import MyAnimeList from "./Components/MyAnimeList/MyAnimeList"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import { Logout } from "./Components/Login/actions/Login"
import { Router, Route } from "react-router-dom"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import Auth from "./Components/Auth/Auth"
import { createBrowserHistory } from "history"
import { ToastContainer } from "react-toastify"
import { Zoom } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
var http = require("http")

setInterval(function() {
   http.get("http://myanimelist.herokuapp.com")
}, 300000) // every 5 minutes (300000)

export const history = createBrowserHistory()

const mapStateToProps = state => {
   return {
      search: state.changeSearchField.search,
      filteredAnime: state.requestSearchedAnime.filteredAnime,
      isPending: state.requestSearchedAnime.isPending,
      error: state.requestSearchedAnime.error,
      loggedIn: state.Login.LoggedIn
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onSearchChange: event => dispatch(changeSearchField(event.target.value)),
      onRequestSearchedAnime: query => dispatch(requestSearchedAnime(query)),
      onLogout: () => dispatch(Logout())
   }
}

// eslint-disable-next-line
const blacktheme = {
   primary: "#272727", //darkest
   secondary: "#d3d3d3", //white
   accent: "#0088f1", //red
   background: "#121212",
   border: "#121212",
   hover: "#3d3d3d",
   selected: "#515151",
   hovertext: "#FBFAF5",
   fontFamily: "'Merriweather Sans', sans-serif;"
}

// eslint-disable-next-line
const blacktheme2 = {
   primary: "#212121",
   primary_dark: "#121212",
   primary_light: "#424242",
   primary_light2: "#616161",

   secondary: "#1976d2",
   secondary_dark: "#004ba0",

   secondary_light: "#63a4ff",

   primary_text: "#ffffff",
   secondary_text: "#ffffff",

   fontFamily: "'Roboto', sans-serif;"
}

// eslint-disable-next-line
const whitetheme = {
   primary: "#FBFAF5", //hell weis
   secondary: "#2A2D2E", //dunkel black
   accent: "#66FCF1", // blau hell
   background: "#F7F7F7", //grau
   border: "#BABABA", // dunkel grau
   hover: "#e0e0e0",
   selected: "#BABABA",
   hovertext: "#2A2D2E",
   fontFamily: "Montserrat"
}
const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
    background:${props => props.theme.primary_dark};
    
   
  }
  body::-webkit-scrollbar-track
{
	box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #212121;
}
body::-webkit-scrollbar
{
	width: 12px;
	background-color: #212121;
}
body::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: #555;
}
`

class App extends Component {
   constructor() {
      super()
      this.state = {
         theme: blacktheme2
      }
   }
   render() {
      const {
         filteredAnime,
         onRequestSearchedAnime,
         onSearchChange,
         search,
         loggedIn,
         onLogout
      } = this.props

      return (
         <Router history={history}>
            <ThemeProvider theme={this.state.theme}>
               <ScrollToTop>
                  <ToastContainer transition={Zoom} />
                  <div>
                     <GlobalStyle />
                     <Navigation
                        onSearchChange={onSearchChange}
                        loggedIn={loggedIn}
                        onLogout={() => onLogout()}
                        onRequestSearchedAnime={() =>
                           onRequestSearchedAnime(search)
                        }
                        search={search}
                     />
                     {/* <Categorys /> */}
                     <Route
                        path={`/search`}
                        render={props => (
                           <CardList {...props} filteredAnime={filteredAnime} />
                        )}
                     />
                     <Route exact path="/" component={RedommendedAnime} />
                     <Route path={`/Register`} component={Register} />
                     <Route path={`/Login`} component={Login} />
                     <Route
                        path={`/MyAnimeList`}
                        component={Auth(MyAnimeList)}
                     />
                     <Route path="/anime/:id" component={SingleMoreInfo} />
                  </div>
               </ScrollToTop>
            </ThemeProvider>
         </Router>
      )
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App)
