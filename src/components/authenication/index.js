import React, { Component } from 'react'

import LoginPage from '../../pages/Login'

const Auth = App =>
  class extends Component {
    state = {
      loggedIn: false
    }

    componentDidMount() {
      if (!localStorage.getItem('token')) {
        this.setState({ loggedIn: false })
      } else {
        this.setState({ loggedIn: true })
      }
    }
    render() {
      if (this.state.loggedIn) return <App />
      return <LoginPage />
    }
  }

export default Auth
