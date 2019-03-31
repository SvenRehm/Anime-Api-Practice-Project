import React, { Component } from "react"
import { getJwt } from "../helpers/jwt"
import { withRouter } from "react-router-dom"

import { connect } from "react-redux"
import { Authenticate } from "../Login/actions/Login"

const mapStateToProps = state => {
  return {
    user: state.Login.user,
    loggedIn: state.Login.LoggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuthenticate: jwt => dispatch(Authenticate(jwt))
  }
}

export default function(ComposedComponent) {
  class Auth extends Component {
    componentWillMount() {
      const jwt = getJwt()

      if (!jwt) {
        this.props.history.push("/Login")
      } else {
        this.props.onAuthenticate(jwt)
      }
    }
    componentWillUpdate(nextProps) {
      const jwt = getJwt()
      if (!jwt) {
        this.props.history.push("/Login")
      }
    }
    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Auth)
  )
}
