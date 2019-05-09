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
import { library } from "@fortawesome/fontawesome-svg-core"
import {
   faHeart,
   faStar,
   faPlusSquare,
   faPlusCircle,
   faMinusCircle,
   faSpinner
} from "@fortawesome/free-solid-svg-icons"
import {
   faPlusSquare as farPlusSquare,
   faMinusSquare as farMinusSquare
} from "@fortawesome/free-regular-svg-icons"

export const history = createBrowserHistory()

//fontawesome
library.add(
   faHeart,
   faStar,
   faPlusSquare,
   faPlusCircle,
   faMinusCircle,
   faSpinner
)
library.add(farPlusSquare, farMinusSquare)

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
// const themeblack = {
//   primary: "#171717",
//   secondary: "#f9f9f9",
//   accent: "#e50914",
//   darkgrey: "#221f1f",
//   lightgrey: "#272727",
//   fontFamily: "Roboto"
// }
// const themewhite = {
//   primary: "#F5F5F5", //darkest
//   secondary: "#221f1f",
//   accent: "#FF0000", //red
//   background: "#FAFAFA",
//   border: "#BABABA",
//   fontFamily: "Roboto"
// }

// eslint-disable-next-line
const blacktheme = {
   primary: "#272727", //darkest
   secondary: "#d3d3d3", //white
   accent: "#FF0000", //red
   background: "#121212",
   border: "#121212",
   hover: "#3d3d3d",
   selected: "#515151",
   hovertext: "#FBFAF5",
   fontFamily: "'Merriweather Sans', sans-serif;"
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
    background:${props => props.theme.background};
  }
`

class App extends Component {
   constructor() {
      super()
      this.state = {
         theme: blacktheme
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
