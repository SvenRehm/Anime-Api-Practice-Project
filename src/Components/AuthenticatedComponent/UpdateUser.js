import React, { Component } from "react"
import { getJwt } from "../helpers/jwt"
import { withRouter } from "react-router-dom"

import { connect } from "react-redux"
import { Authenticate } from "../Login/actions/Login"

const mapStateToProps = state => {
  return {
    user: state.Login.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthenticate: jwt => dispatch(Authenticate(jwt))
  }
}
class AuthenticatedComponent extends Component {
  componentDidMount() {
    const jwt = getJwt()
    if (!jwt) {
      this.props.history.push("/Login")
    } else {
      this.props.onAuthenticate(jwt)
    }

  }

  render() {
    return <div>{this.props.children}</div>
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthenticatedComponent)
)
