import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Redbox from 'redbox-react'

import App from './App'

const CustomErrorReporter = ({ error }) => <Redbox error={error} />

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
}

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <Router>
      <App />
    </Router>
  </AppContainer>,
  document.getElementById('root')
)
