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

  it('should have a step function that makes its node rotate left and right', function() {
    sinon.spy(streetFighterDancer.$node, 'toggleClass');
    streetFighterDancer.step();
    expect(streetFighterDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(streetFighterDancer, 'step');
      expect(streetFighterDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(streetFighterDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(streetFighterDancer.step.callCount).to.be.equal(2);
    });
  });
});
