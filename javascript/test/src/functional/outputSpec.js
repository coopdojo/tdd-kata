'use strict';

const SOURCE_DIRECTORY = '../../../src/';
const BASE_API_URI = 'http://localhost:3000';

let chai = require('chai');
let chaiAsPromised = require("chai-as-promised");
let mocha = require('mocha');
let sinon = require('sinon');
let request = require('request-promise');

let app = require(SOURCE_DIRECTORY + 'app');

chai.use(chaiAsPromised);

let expect = chai.expect;

class Member {
    _constructor(id) {
        this.id = id;
    }

    get id(){
        return this.id;
    }

     totalSpend(){
         this.totalOfAllTransactions = 20;
         return this.totalOfAllTransactions;
     }
}

describe('functional tests', () => {
    it('should return an JSON object of data', () => {
        return request.get(BASE_API_URI + '/transactions').then((data) => {
            let expectedMember = new Member(0);
            let actualMember =  new Member(JSON.parse(data)[0].memberId);
        
            return expect(actualMember).to.deep.equal(expectedMember);
        });
    });
});

describe('functional tests', () => {
    it('should tell us how much a member has spent', () => {
        let member = new Member(0);
        expect(member.totalSpend()).to.equal(20);        
    });
});