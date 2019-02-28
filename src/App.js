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
import SingleMoreInfo from "./Components/SingleMoreInfo/SingleMoreInfoMoreInfo"
import { BrowserRouter, Route } from "react-router-dom"
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"

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
        <ScrollToTop>
          <div>
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
            <Route path="/anime/info/:id" component={SingleMoreInfo} />
          </div>
        </ScrollToTop>
      </BrowserRouter>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
