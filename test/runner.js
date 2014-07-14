var fs = require('fs')
  , vm = require('vm')

  , test = require('tape')

  , minifyify = require('../html-minifyify')

  , mini = minifyify()
  , body = []

mini.on('data', function (chunk) {
  body.push(chunk)
})
mini.once('end', function () {
  body = Buffer.concat(body).toString()

  vm.runInNewContext(body, { test: test })
})

fs.createReadStream(__dirname + '/test.js').pipe(mini)