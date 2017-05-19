import React from 'react'
import { render } from 'react-dom'
import './index.sass'
import Root from './components/Root'

render(
  <Root />,
  document.querySelector('main')
);


// for debugging

import state from './state'
import moment from 'moment'
import request from './request'
import logger from './logger'
window.DEBUG = window.DEBUG || {}
window.DEBUG.state = state
window.DEBUG.React = React
window.DEBUG.moment = moment
window.DEBUG.request = request
window.DEBUG.logger = logger
