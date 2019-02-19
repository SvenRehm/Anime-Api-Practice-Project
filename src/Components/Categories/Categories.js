import React, { Component } from "react"

export default class Categories extends Component {
  constructor() {
    super()
    this.state = {
      animeCategorys: [
        {
          title: "",
          totalMediaCount: ""
        }
      ],
      animeCategoryLinks: []
    }
  }

  async componentDidMount() {
    //get all the category favorites links
    await fetch(`https://kitsu.io/api/edge/category-favorites`)
      .then(res => res.json())
      .then(json => {
        const animeCategorys = json.data
        this.setState({
          animeCategorysLinks: animeCategorys.map(id => ({
            url: id.relationships.category.links.related
          }))
        })
      })

    // use the links and pass them into an array
    const animeCategorysLinks = this.state.animeCategorysLinks
    const allCategoryLinks = animeCategorysLinks.map(function(link) {
      return link.url
    })

    //fetch the links and setstate to the data they output
    let requests = allCategoryLinks.map(url => fetch(url))
    await Promise.all(requests)
      .then(responses => {
        return responses
      })
      .then(responses => Promise.all(responses.map(r => r.json())))
      .then(users => {
        this.setState({
          animeCategorys: users.map(user => ({
            title: user.data.attributes.title,
            totalMediaCount: user.data.attributes.totalMediaCount
          }))
        })
      })
  }

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
    console.log(this.state.animeCategorys)
    const { animeCategorys } = this.state
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
