import React, { Component } from "react"
import { connect } from "react-redux"
import { changeSearchField, requestSearchedAnime } from "./actions"
import CardList from "./Components/CardList"
import Navigation from "./Components/Navigation"
// import Categorys from "./Components/Categorys"
import RedommendedAnime from "./Components/RecommendedAnime"
import SingleMoreInfo from "./Components/SingleMoreInfoMoreInfo"
import { BrowserRouter, Route } from "react-router-dom"

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
        <div>
          <Navigation
            onSearchChange={onSearchChange}
            onRequestSearchedAnime={() => onRequestSearchedAnime(search)}
            search={search}
          />
          {/* <input onChange={onSearchChange} type="text" /> */}
          {/* <button onClick={() => onRequestSearchedAnime(search)}>Click Me</button> */}
          {/* <CardList filteredAnime={filteredAnime} /> */}
          {/* <Categorys /> */}
          {/* <RedommendedAnime /> */}

          <Route exact path="/" component={RedommendedAnime} />
          <Route
            path={`/search`}
            render={props => (
              <CardList {...props} filteredAnime={filteredAnime} />
            )}
          />
          <Route path="/anime/info/:id" component={SingleMoreInfo} />
        </div>
      </BrowserRouter>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
