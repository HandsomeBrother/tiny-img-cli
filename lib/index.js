const tinyimg = module.exports = {};

tinyimg.cli = require('./cli.js');

tinyimg.log = require('./log.js');

// register global variable
Object.defineProperty(global, 'tinyimg', {
    enumerable: true,
    writable: false,
    value: tinyimg
});