'use strict'

import APIUtils from './APIUtils'

const AuthAPI = {
  checkLoginStatus() {
    return APIUtils.get('checkLogin')
  },

  login(user) {
    return APIUtils.post('login', user)
  },

  logout() {
    return APIUtils.post('auth/logout')
  }

}

export default AuthAPI
