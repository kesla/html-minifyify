var minify = require('html-minifier').minify

test('options', function (t) {
  var mini = minify(
          '<div class="bar"><!-- Hello, World! --></div>'
        , { removeComments: true }
      );

  t.equal(
      mini
    , '<div class="bar"></div>'
  )
  t.end()
})
