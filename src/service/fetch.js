/**
 * Created by jyhuang on 2017/4/11.
 */
// 兼容ie到ie8
require('fetch-ie8')
require('es6-promise').polyfill()

export const commonFetch = (url, init) => {
  return window.fetch(url, init).then(response => {
    if (response.ok) {
      return response.json()
    }
  })
}
