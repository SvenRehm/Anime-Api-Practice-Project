import React, { Component } from "react"
import { connect } from "react-redux"
import { requestCategoryLinks, requestCategorys } from "../actions"

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
    onRequestCategorys: request => dispatch(requestCategorys(request))
  }
}

class Categorys extends Component {
  constructor() {
    super()
    this.state = {
      animeCategorys: [
        {
          title: "",
          totalMediaCount: ""
        }
      ],
      animeCategoryLinks: [
        {
          url: ""
        }
      ]
    }
  }
  componentDidMount() {
    this.props.onRequestCategoryLinks()
  }
  // async componentDidMount() {
  //   //get all the category favorites links
  //   await fetch(`https://kitsu.io/api/edge/category-favorites`)
  //     .then(res => res.json())
  //     .then(json => {
  //       const animeCategorys = json.data
  //       this.setState({
  //         animeCategorysLinks: animeCategorys.map(id => ({
  //           url: id.relationships.category.links.related
  //         }))
  //       })
  //     })

  //   // use the links and pass them into an array
  //   const animeCategorysLinks = this.state.animeCategorysLinks
  //   const allCategoryLinks = animeCategorysLinks.map(function(link) {
  //     return link.url
  //   })

  //   //fetch the links and setstate to the data they output
  //   let requests = allCategoryLinks.map(url => fetch(url))
  //   await Promise.all(requests)
  //     .then(responses => {
  //       return responses
  //     })
  //     .then(responses => Promise.all(responses.map(r => r.json())))
  //     .then(users => {
  //       this.setState({
  //         animeCategorys: users.map(user => ({
  //           title: user.data.attributes.title,
  //           totalMediaCount: user.data.attributes.totalMediaCount
  //         }))
  //       })
  //     })
  // }

  // onClickbutton = () => {
  //   const animeCategoriesLinks = this.state.animeCategoriesLinks
  //   const allanimelinks = animeCategoriesLinks.map(function(item) {
  //     return item.url
  //   })
  //   let requests = allanimelinks.map(url => fetch(url))

  //   Promise.all(requests)
  //     .then(responses => {
  //       return responses
  //     })
  //     .then(responses => Promise.all(responses.map(r => r.json())))
  //     .then(users => {
  //       this.setState({
  //         animeCategories: users.map(user => ({
  //           title: user.data.attributes.title,
  //           totalMediaCount: user.data.attributes.totalMediaCount
  //         }))
  //       })
  //     })
  // }

  render() {
    const { animeCategorys } = this.state
    const { onRequestCategorys, animeCategoryLinks } = this.props

    const allanimelinks = animeCategoryLinks.map(function(item) {
      return item.url
    })

    return (
      <div>
        <button onClick={() => onRequestCategorys()}>click</button>

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
