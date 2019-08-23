import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'

import Presentation from './presentation'
import Programming from './2019/programming'

const CustomErrorReporter = ({ error }) => <Redbox error={error} />

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
}

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Router>
      <Route path="/" component={Presentation} />
      <Route path="/2019/programming" component={Programming} />
    </Router>
  </AppContainer>,
  document.getElementById('root')
)
