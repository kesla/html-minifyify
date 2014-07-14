var staticModule = require('static-module')
  , through = require('through2')
  , minify = require('html-minifier').minify

module.exports = function (file) {
    if (/\.json$/.test(file)) return through();
    
    var sm = staticModule({
            'html-minifier': {
                minify: function (text, options) {
                  var stream = through()

                  stream.push(minify(text, options))
                  stream.push(null)
                  return stream.pipe(require('quote-stream')())
                }
            }
    })
    return sm
}