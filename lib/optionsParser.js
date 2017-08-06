'use strict';

/**
 * @var {Object} argv
 * @property {Number} d
 * @property {String} o
 * @property {Number} i
 * @property {Number} p
 * @property {Number} r
 * @property {*} h
 * @property {*} v
 * @property {Number} debounce
 * @property {String} host
 * @property {Number} interval
 * @property {Number} port
 * @property {Number} reload-delay
 * @property {*} help
 * @property {*} version
 */
module.exports = function(argv) {
    let verbose = true;
    const truthyValues = [true, 1, 'true', '1', 'yes', 'on', 'y', 't'];

    if (truthyValues.indexOf(argv.q) > -1 || truthyValues.indexOf(argv.quiet) > -1) {
        verbose = false;
    }

    return {
        cwd: process.cwd(),
        verbose: verbose,
        debounceDelay: (argv.d || argv.debounce || 500),
        reloadDelay: (argv.r || argv['reload-delay'] || 0),
        host: (argv.o || argv.host || '127.0.0.1'),
        interval: (argv.i || argv.interval || 1000),
        port: (argv.p || argv.port || 35729)
    };
};
