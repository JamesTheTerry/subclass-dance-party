class MakeFadingDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps, speed) {
    super(top, left, timeBetweenSteps);
    this.speed = speed || 'fast';
    this.step(this.speed);
  }
  
  step(speed) {
    MakeDancer.prototype.step.call(this);
    this.$node.fadeToggle(speed);
  }
}