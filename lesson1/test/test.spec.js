const assert = require('chai').assert;
const makeHashTag = require('../index');

describe('Hashtagable', function () {

    it('returns #Lucky2016', function () {
        assert.equal( makeHashTag(' lucky    2016'), '#Lucky2016' );
    });

    it('transforms lUcKy into Lucky', function () {
        assert.equal( makeHashTag('lUcKy'), '#Lucky' );
    });

    it('returns #FeelThePowerOfNodejs', function () {
        assert.equal( makeHashTag('feel the power of node.js'), '#FeelThePowerOfNodejs' );
    });

});
