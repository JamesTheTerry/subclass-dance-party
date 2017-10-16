window.MakeRedGreenDancer = class MakeRedGreenDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
  }
  
  step(speed) {
    MakeDancer.prototype.step.call(this);
    this.$node.toggleClass('green');
  }
};