import React, { Component } from "react"
import CardList from "./Components/CardList"
import "./App.css"
import Categorys from "./Components/Categorys"
import { connect } from "react-redux"
import { changeSearchField, requestSearchedAnime } from "./actions"

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
  constructor() {
    super()
    this.state = {
      animeCategories: []
    }
  }
  componentWillMount() {}

  render() {
    const {
      filteredAnime,
      onRequestSearchedAnime,
      onSearchChange,
      search
    } = this.props

    return (
      <div>
        <input onChange={onSearchChange} type="text" />
        <button onClick={() => onRequestSearchedAnime(search)}>Click Me</button>
        <CardList filteredAnime={filteredAnime} />
        <Categorys />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
