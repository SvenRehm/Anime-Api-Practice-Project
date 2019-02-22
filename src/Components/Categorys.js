import React, { Component } from "react"
import { connect } from "react-redux"
import {
  requestCategoryLinks,
  requestCategorys
} from "../actions/requestCategoryLinks"

const mapStateToProps = state => {
  return {
    animeCategoryLinks: state.requestCategoryLinks.animeCategoryLinks,
    animeCategorys: state.requestCategorys.animeCategorys,
    isPending: state.requestCategoryLinks.isPending,
    error: state.requestCategoryLinks.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRequestCategoryLinks: () => dispatch(requestCategoryLinks()),
    onRequestCategorys: () => dispatch(requestCategorys())
  }
}

class Categorys extends Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.props.onRequestCategoryLinks()
    console.log(this.props)
  }

  render() {
    const { animeCategorys } = this.props

    return (
      <div>
        {animeCategorys.map((category, i) => {
          return (
            <p key={i}>
              {animeCategorys[i].title}-{animeCategorys[i].totalMediaCount}
            </p>
          )
        })}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categorys)
