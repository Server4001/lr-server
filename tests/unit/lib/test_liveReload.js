'use strict';

const expect = require('chai').expect;
const liveReload = require('../../../lib/liveReload');

describe('LiveReload', () => {
    it('should listen on the correct port', () => {
        const port = 1234;
        const server = liveReload([], {
            verbose: false,
            port
        });

        expect(server.options.port).to.equal(port);

        // Shut down the server, mocha won't kill it by default.
        server.close();
    });
});
