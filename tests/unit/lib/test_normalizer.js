'use strict';

const expect = require('chai').expect;
const normalizer = require('../../../lib/normalizer');

describe('Normalizer', () => {
    it('should convert a string to an error', () => {
        const message = 'this is a string';
        const error = normalizer.error(message);

        expect(error).to.be.an.instanceof(Error);
        expect(error.message).to.equal(message);
    });

    it('should not normalize an Error', () => {
        const message = 'this is also a string';
        const error = new Error(message);
        const result = normalizer.error(error);

        expect(result).to.equal(error);
    })
});
