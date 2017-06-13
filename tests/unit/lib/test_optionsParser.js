'use strict';

const expect = require('chai').expect;
const optionsParser = require('../../../lib/optionsParser');
const cwd = 'the/current/path';

// Set up mock for process.cwd()
global.process.cwd =  () => cwd;

describe('Options Parser', () => {
    it('should return cwd()', () => {
        const parsedOptions = optionsParser({});

        expect(parsedOptions.cwd).to.equal(cwd);
    });

    it('should return default values', () => {
        const parsedOptions = optionsParser({});

        expect(parsedOptions.debounceDelay).to.equal(500);
        expect(parsedOptions.host).to.equal('127.0.0.1');
        expect(parsedOptions.interval).to.equal(1000);
        expect(parsedOptions.port).to.equal(35729);
        expect(parsedOptions.verbose).to.equal(true);
    });

    it('should allow debounce delay override', () => {
        const debounceDelay = 8;
        const parsedOptions1 = optionsParser({ d:  debounceDelay });
        const parsedOptions2 = optionsParser({ debounce:  debounceDelay });

        expect(parsedOptions1.debounceDelay).to.equal(debounceDelay);
        expect(parsedOptions2.debounceDelay).to.equal(debounceDelay);
    });

    it('should prefer d over debounce for debounce delay override', () => {
        const debounceDelay = 16;
        const parsedOptions = optionsParser({
            d: debounceDelay,
            debounce: 100
        });

        expect(parsedOptions.debounceDelay).to.equal(debounceDelay);
    });

    it('should allow host override', () => {
        const host = 'dev.blah.loc';
        const parsedOptions1 = optionsParser({ o:  host });
        const parsedOptions2 = optionsParser({ host:  host });

        expect(parsedOptions1.host).to.equal(host);
        expect(parsedOptions2.host).to.equal(host);
    });

    it('should prefer o over host for host override', () => {
        const host = 'dev.whatever.loc';
        const parsedOptions = optionsParser({
            o: host,
            host: 'blah'
        });

        expect(parsedOptions.host).to.equal(host);
    });

    it('should allow interval override', () => {
        const interval = 1;
        const parsedOptions1 = optionsParser({ i:  interval });
        const parsedOptions2 = optionsParser({ interval:  interval });

        expect(parsedOptions1.interval).to.equal(interval);
        expect(parsedOptions2.interval).to.equal(interval);
    });

    it('should prefer i over interval for interval override', () => {
        const interval = 2;
        const parsedOptions = optionsParser({
            i: interval,
            interval: 9999999
        });

        expect(parsedOptions.interval).to.equal(interval);
    });

    it('should allow port override', () => {
        const port = 1234;
        const parsedOptions1 = optionsParser({ p:  port });
        const parsedOptions2 = optionsParser({ port:  port });

        expect(parsedOptions1.port).to.equal(port);
        expect(parsedOptions2.port).to.equal(port);
    });

    it('should prefer p over port for port override', () => {
        const port = 4321;
        const parsedOptions = optionsParser({
            p: port,
            port: 9999999
        });

        expect(parsedOptions.port).to.equal(port);
    });

    it('should allow quiet override', () => {
        const parsedOptions1 = optionsParser({ q:  true });
        const parsedOptions2 = optionsParser({ quiet:  true });

        expect(parsedOptions1.verbose).to.equal(false);
        expect(parsedOptions2.verbose).to.equal(false);
    });

    it('should prefer q over quiet for quiet override', () => {
        const parsedOptions = optionsParser({
            q: true,
            quiet: false
        });

        expect(parsedOptions.verbose).to.equal(false);
    });

    it('should return all keys', () => {
        const parsedOptions = optionsParser({});

        expect(parsedOptions).to.have.keys([
            'cwd',
            'debounceDelay',
            'host',
            'interval',
            'port',
            'verbose'
        ]);
    });
});
