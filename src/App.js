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
import { BrowserRouter, Route } from "react-router-dom"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
import { ThemeProvider, createGlobalStyle } from "styled-components"

const mapStateToProps = state => {
  return {
    search: state.changeSearchField.search,
    filteredAnime: state.requestSearchedAnime.filteredAnime,
    isPending: state.requestSearchedAnime.isPending,
    error: state.requestSearchedAnime.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(changeSearchField(event.target.value)),
    onRequestSearchedAnime: query => dispatch(requestSearchedAnime(query))
  }
}
const themeblack = {
  primary: "#171717",
  secondary: "#f9f9f9",
  accent: "#e50914",
  darkgrey: "#221f1f",
  fontFamily: "Roboto"
}
const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fontFamily};
    background:${props => props.theme.primary};
    
  }
`

class App extends Component {
  render() {
    const {
      filteredAnime,
      onRequestSearchedAnime,
      onSearchChange,
      search
    } = this.props

    return (
      <BrowserRouter>
        <ThemeProvider theme={themeblack}>
          <ScrollToTop>
            <div>
              <GlobalStyle />
              <Navigation
                onSearchChange={onSearchChange}
                onRequestSearchedAnime={() => onRequestSearchedAnime(search)}
                search={search}
              />

              {/* <Categorys /> */}

              <Route exact path="/" component={RedommendedAnime} />

              <Route
                path={`/search`}
                render={props => (
                  <CardList {...props} filteredAnime={filteredAnime} />
                )}
              />
              <Route path={`/Register`} component={Register} />
              <Route path={`/Login`} component={Login} />
              <Route path={`/MyAnimeList`} component={MyAnimeList} />

              <Route path="/anime/:id" component={SingleMoreInfo} />
            </div>
          </ScrollToTop>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
