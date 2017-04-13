/**
 * Created by jyhuang on 2017/4/12.
 */
import $ from 'jquery'
require('jquery.cookie')

const cookieObj = {
  SID_KEY: 'sid'
}

export default {
  cookieObj: cookieObj,

  setCookie (cookieKey, cookieValue, expires) {
    var options
    if (expires) {
      options = {
        path: '/',
        expires: 7
      }
    } else {
      options = {
        path: '/'
      }
    }
    $.cookie(cookieKey, cookieValue, options)
  },

  getCookie (cookieKey) {
    return $.cookie(cookieKey)
  },

  removeCookie (cookieKey) {
    $.removeCookie(cookieKey, {path: '/'})
  }
}
