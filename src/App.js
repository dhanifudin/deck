import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Presentation from './Presentation'
import Programming from './2019/programming/Programming.js'
import Programming00 from './2019/programming/Programming00.js'

const App = () => {
  const routes = [
    { path: '/', component: Presentation },
    { path: '/2019/programming', component: Programming },
    { path: '/2019/programming/00', component: Programming00 },
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
