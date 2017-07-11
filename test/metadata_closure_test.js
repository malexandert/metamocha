const expect = require('chai').expect;

describe('A test', {
  metadata: { a: 1 },

  tests: function() {
    it('should be able to access its own metadata, given by the suite', function() {
      expect(this.test.metadata).to.eql({ a: 1 });
    });

    it('should be able to access its own metadata, given in the test', {
      metadata: { a: 2 },

      test: function() {
        expect(this.test.metadata).to.eql({ a: 2 });
      }
    });
  }
});
