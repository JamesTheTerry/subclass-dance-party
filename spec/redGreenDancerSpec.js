describe('redGreenDancer', function() {

  var redGreenDancer, clock;
  var timeBetweenSteps = 300;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    redGreenDancer = new MakeRedGreenDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(redGreenDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node flash red and green', function() {
    sinon.spy(redGreenDancer.$node, 'toggleClass');
    redGreenDancer.step();    
    expect(redGreenDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per 3 second', function() {
      sinon.spy(redGreenDancer, 'step');
      expect(redGreenDancer.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(redGreenDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(redGreenDancer.step.callCount).to.be.equal(2);
    });
  });
});
