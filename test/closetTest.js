var expect = require('chai').expect;
var organizer = require('../lib/closet');
var Closet = organizer.Closet;
var Clothing = organizer.Clothing;
//required file must have a module.exports tag at the bottom

describe("The Closet", function() {
  it('should have a name and optionally a size', function() {
    var myCloset = new Closet('My Closet');
    expect(myCloset.name).to.equal('My Closet');
    expect(myCloset.size).to.equal(37);
    var myBiggerCloset = new Closet('My Closet', 100);
    expect(myBiggerCloset.size).to.equal(100);
  });

  it('clothing items should have a name, type, color and season', function() {
    var jeans = new Clothing('jeans', 'pants', 'blue', 'year-round');
    expect(jeans.name).to.equal('jeans');
    expect(jeans.type).to.equal('pants');
    expect(jeans.color).to.equal('blue');
    expect(jeans.season).to.equal('year-round');
  });

  it('should add a clothing item to the closet, unless closet is full', function() {
    var myCloset = new Closet('My Closet');
    var jeans = new Clothing('jeans', 'pants', 'blue', 'year-round');
    myCloset.add(jeans);
    expect(myCloset.contents).to.have.length(1)
    expect(myCloset.contents).to.contain(jeans)
    var littleCloset = new Closet('Little Closet', 2);
    var shirt = new Clothing('denim shirt', 'tops', 'denim blue', 'year-round');
    var navySlacks = new Clothing('navy slacks', 'pants', 'navy', 'fall/winter');
    littleCloset.add(shirt);
    littleCloset.add(navySlacks);
    littleCloset.add(jeans);
    expect(littleCloset.contents).to.have.length(2);
    expect(littleCloset.contents).to.contain(shirt);
    expect(littleCloset.contents).to.not.contain(jeans);
  });

  it('should list closet items', function() {
    var myCloset = new Closet('My Closet');
    var jeans = new Clothing('jeans', 'pants', 'blue', 'year-round');
    var shirt = new Clothing('denim shirt', 'tops', 'denim blue', 'year-round');
    var navySlacks = new Clothing('navy slacks', 'pants', 'navy', 'fall/winter');
    myCloset.add(shirt);
    myCloset.add(navySlacks);
    myCloset.add(jeans);
    // don't know how to test console.log
  });
})
