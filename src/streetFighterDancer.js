window.StreetFighterDancer = class StreetFighterDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    console.log('1');
    super(top, left, timeBetweenSteps);
    this.$node = $('<div class="streetFighter rotateLeft ' + this.setCharacter() + '"></div>');
    // this.$node = $(`<div class="streetFighter ${this.setCharacter()}'"></div>'`);
    MakeDancer.prototype.setPosition.call(this, top, left);
    // set initial orientation to the right
  }
  
  step() {
    MakeDancer.prototype.step.call(this);
    this.$node.toggleClass('rotateRight');
  }
  
  setCharacter() {
    var classArray = ['sFighter0', 'sFighter1', 'sFighter2', 'sFighter3'];
    var rand = Math.floor(Math.random() * 3);
    return classArray[rand];
  }
};