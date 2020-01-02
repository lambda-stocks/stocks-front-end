import React from 'react'
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import IndexPage from './pages/'
import Dashboard from './pages/Dashboard'
import GlobalStyles from './components/base'

const AppWrapper = styled.div`
  .page {
    transition: all 0.5s;
  }

  .page.fade-exit {
    position: absolute;
    top: 0;
  }

  .page.fade-enter {
    opacity: 0;
    transition-delay: 0.3s;
  }

  .page.fade-enter-active {
    opacity: 1;
  }

  .page.fade-exit {
    opacity: 1;
  }

  .page.fade-exit-active {
    opacity: 0;
  }

  .relative {
    position: relative;
  }
`

const App = () => {
  const location = useLocation()
  return (
    <AppWrapper>
      <GlobalStyles />
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="relative">
        <TransitionGroup>
          <CSSTransition key={location.pathname} timeout={500} classNames="fade">
            <div className="page">
              <Switch location={location}>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" component={IndexPage} />
              </Switch>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </AppWrapper>
  )
}

export default App
