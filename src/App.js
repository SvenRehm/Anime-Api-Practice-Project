import React, { Component } from "react"
import { connect } from "react-redux"
import { changeSearchField, requestSearchedAnime } from "./actions"
import CardList from "./Components/CardList"
import Navigation from "./Components/Navigation"
// import Categorys from "./Components/Categorys"
import RedommendedAnime from "./Components/RecommendedAnime"

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
//Am i in router??
class App extends Component {
  render() {
    const {
      filteredAnime,
      onRequestSearchedAnime,
      onSearchChange,
      search
    } = this.props

    return (
      <div>
        <Navigation
          onSearchChange={onSearchChange}
          onRequestSearchedAnime={() => onRequestSearchedAnime(search)}
          search={search}
        />
        {/* <input onChange={onSearchChange} type="text" /> */}
        {/* <button onClick={() => onRequestSearchedAnime(search)}>Click Me</button> */}
        <CardList filteredAnime={filteredAnime} />
        {/* <Categorys /> */}
        <RedommendedAnime />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
