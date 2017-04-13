/**
 * Created by jyhuang on 2017/4/11.
 */
// 兼容ie到ie8
require('fetch-ie8')
require('es6-promise').polyfill()
import appService from './appService'

export const init = ({sid, data, method, headers}) => {
  method = method || 'POST'
  data = data || {}
  sid = sid || appService.getCookie(appService.cookieObj.SID_KEY)
  let body = method === 'GET' ? null : window.JSON.stringify(data)
  let apiData = {
    method: method,
    headers: headers || {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'If-Modified-Since': 'Thu, 01 Jun 1970 00:00:00 GMT'
    }
  }
  if (method !== 'get' && body) {
    apiData.body = body
  }
  if (sid) {
    apiData.headers['ECMEDM-SID'] = sid
  }
  return apiData
}

export const commonFetch = (url, init) => {
  return window.fetch(url, init).then(response => {
    if (response.ok) {
      return response.json()
    }
  })
}
