'use strict';

const SOURCE_DIRECTORY = '../../src/';

let chai = require('chai');
let chaiAsPromised = require("chai-as-promised");
let mocha = require('mocha');
let sinon = require('sinon');

let app = require(SOURCE_DIRECTORY + 'app');

chai.use(chaiAsPromised);

let expect = chai.expect;

describe('appSpec', () => {
    it('should return true', () => {
        return expect(app()).to.equal(true);
    });
});