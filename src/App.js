import React, { useState } from 'react'
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import IndexPage from './pages/'
import Dashboard from './pages/Dashboard'
import GlobalStyles from './components/base'
import TopNav from './components/top-navigation/TopNav'

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
    margin-top: 60px;
    margin-left: 60px;
  }
`

const App = () => {
  const location = useLocation()
  const [hideNav, setNavVisibility] = useState(false)

  return (
    <AppWrapper>
      <GlobalStyles />

      <div>
        <TopNav />
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
