import React, { Component } from "react"
import { connect } from "react-redux"

class MyAnimeList extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return <h1>My Anime List</h1>
  }
}

export default connect()(MyAnimeList)
