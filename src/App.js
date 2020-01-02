import React from 'react'
import { Route } from 'react-router-dom'

import IndexPage from './pages/'
import Dashboard from './pages/Dashboard'
import GlobalStyles from './components/base'

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Route exact path="/" component={IndexPage} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  )
}

export default App
