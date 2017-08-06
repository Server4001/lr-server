'use strict';

const path = require('path');
const Gaze = require('gaze').Gaze;
const livereload = require('tiny-lr');
const normalize = require('./normalizer');

module.exports = function(paths, options) {

    const logger = (...data) => {
        if (options.verbose) {
            console.log(...data);
        }
    };

    const gazeOptions = {
        debounceDelay: options.debounceDelay,
        interval: options.interval,
        cwd: options.cwd
    };

    /**
     * @var {Object} server
     */
    let server = livereload({ port: options.port });

    const gazeCallback = function(err) {
        if (err) {
            throw normalize.error(err);
        }

        logger('Watching files...');

        // On changed/added/deleted
        this.on('all', function(status, filePath) {
            filePath = path.relative(options.cwd, filePath);

            if (filePath === '') {
                return;
            }

            setTimeout(() => {
                server.changed({ body: { files: [ filePath ] } });
                logger(`${status}: ${filePath}`);
            }, options.reloadDelay);
        });

        this.on('error', function(err) {
            throw normalize.error(err);
        });
    };

    server.server.removeAllListeners('error');

    server.server.on('error', function(err) {
        if (err.code === 'EADDRINUSE') {
            console.error(`Port ${options.port} is already in use by another process.`);
        } else {
            console.error(err);
        }

        process.exit(1);
    });

    server.listen(options.port, undefined, function(err) {
        if (err) {
            return console.error(err);
        }

        logger(`Live reload server started on: ${options.host}:${options.port}`);

        new Gaze(paths, gazeOptions, gazeCallback);
    });

    return server;
};
