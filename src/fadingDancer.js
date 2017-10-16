window.MakeFadingDancer = class MakeFadingDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps, speed) {
    super(top, left, timeBetweenSteps);
    this.speed = speed || 'fast';
  }
  
  step(speed) {
    MakeDancer.prototype.step.call(this);
    this.$node.fadeToggle(speed);
  }
};