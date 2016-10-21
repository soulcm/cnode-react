require('babel-register')
require.extensions['.less'] = function() {
    return false
}
require('./server')