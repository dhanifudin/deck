import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Presentation from './Presentation'
import About from './About'
import Programming from './2019/programming/Programming.js'
import Programming00 from './2019/programming/Programming00.js'
import Programming01 from './2019/programming/Programming01.js'

const App = () => {
  const routes = [
    { path: '/', component: Presentation },
    { path: '/about', component: About },
    { path: '/2019/programming', component: Programming },
    { path: '/2019/programming/00', component: Programming00 },
    { path: '/2019/programming/01', component: Programming01 },
  ]
  return (
    <Switch>
      {routes.map((route, key) => {
        return (
          <Route
            key={key}
            exact
            path={route.path}
            component={route.component}
          />
        )
      })}
    </Switch>
  )
}

export default App
