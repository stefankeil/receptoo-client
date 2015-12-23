'use strict'

import Reflux from 'reflux'
import APIUtils from '../utils/AuthAPI'

const CurrentUserActions = Reflux.createActions([

  'checkLoginStatus',
  'login',
  'logout'

])

export default CurrentUserActions
