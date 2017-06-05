'use strict';

/**
 * @var {Object} argv
 * @property {Number} d
 * @property {String} o
 * @property {Number} i
 * @property {Number} p
 * @property {*} h
 * @property {*} v
 * @property {Number} debounce
 * @property {String} host
 * @property {Number} interval
 * @property {Number} port
 * @property {*} help
 * @property {*} version
 */
module.exports = function(argv) {
    return {
        cwd: process.cwd(),
        debounceDelay: (argv.d || argv.debounce || 500),
        host: (argv.o || argv.host || '127.0.0.1'),
        interval: (argv.i || argv.interval || 1000),
        port: (argv.p || argv.port || 35729)
    };
};
