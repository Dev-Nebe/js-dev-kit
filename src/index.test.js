const { expect } = require('chai');
const firstFunction = require('./index')();

describe('Our first test', () => {
  it('should pass', () => {
    expect(firstFunction).to.equal(true);
  });
});
