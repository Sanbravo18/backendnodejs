const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', function(){
    describe('when recieve na etity and an action', function() {
        it('should return the respective messege', function(){
            const result = buildMessage('movie', 'create');
            const expect = 'movie created';
            assert.strictEqual(result, expect);
        })
    })
    describe('whenb recieves an entity and an action and is a list', function(){
        it('should return the respective message with  the entity in plural', function(){
            const result = buildMessage('movie','list');
            const expected = 'movies listed';
            assert.strictEqual(result, expected); 
        })
    })
})