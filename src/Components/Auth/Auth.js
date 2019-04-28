import React, { Component } from "react"
import { getJwt } from "../helpers/jwt"
import { withRouter } from "react-router-dom"

import { connect } from "react-redux"
import { Authenticate, getAnimelist } from "../Login/actions/Login"

const mapStateToProps = state => {
   return {
      user: state.Login.user,
      id: state.Login.user.id,
      loggedIn: state.Login.LoggedIn
   }
}

const mapDispatchToProps = dispatch => {
   return {
      onAuthenticate: jwt => dispatch(Authenticate(jwt)),
      onGetAnimelist: id => dispatch(getAnimelist(id))
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
            this.props.onGetAnimelist(this.props.id)
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
