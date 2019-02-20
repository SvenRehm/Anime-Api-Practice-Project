import React, { Component } from "react"
import CardList from "./Components/CardList/CardList"
import "./App.css"
import Categories from "./Components/Categories/Categories"
import { connect } from "react-redux"
import { changeSearchField } from "./actions"

const mapStateToProps = state => {
  return {
    search: state.search
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(changeSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      filteredAnime: [],
      search: "",
      animeCategories: []
    }
  }

  // componentDidMount(){
  //   fetch(`https://kitsu.io/api/edge/anime`)
  //   .then(res=>res.json())
  //   .then(json=>{
  //     console.log(json)
  //     this.setState({
  //       isLoaded:true,
  //       items: json.data[0].attributes.coverImage.large
  //     })
  //   })
  // }

  handleChangeSearch = e => {
    let animeName = e.target.value
    this.setState({
      search: animeName
    })
  }
  handleClickSearch = e => {
    const api_search = "https://kitsu.io/api/edge/anime?filter[text]="
    const { search } = this.state
    const textSearchUrl = `${api_search}${search}`

    fetch(`${textSearchUrl}`)
      .then(res => res.json())
      .then(json => {
        const filteredAnime = json.data
        this.setState({
          filteredAnime: filteredAnime
        })
      })
  }

  render() {
    const { filteredAnime } = this.state
    const { onSearchChange } = this.props
    return (
      <div>
        <input onChange={onSearchChange} type="text" name="name" />
        <button onClick={this.handleClickSearch}>Click Me</button>
        <Categories />
        <CardList filteredAnime={filteredAnime} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
