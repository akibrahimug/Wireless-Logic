const assert = require('chai').assert;
const application = require('../app').application;

describe('App', function(){
    it('app should return an Object', function(){
        let result = application()
        assert.typeOf(result, 'Object')
    })

})