window.RainbowDancer = class RainbowDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    console.log('adding rainbow');
    super(top, left, timeBetweenSteps);
    this.$node.addClass('rainbow');
  }
  
  step() {
  }
};