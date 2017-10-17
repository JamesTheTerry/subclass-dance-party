describe('streetFighterDancer', function() {

  var streetFighterDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    streetFighterDancer = new StreetFighterDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(streetFighterDancer.$node).to.be.an.instanceof(jQuery);
  });
});
