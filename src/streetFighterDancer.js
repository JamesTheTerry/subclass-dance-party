window.StreetFighterDancer = class StreetFighterDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    console.log('1');
    super(top, left, timeBetweenSteps);
    this.$node = $('<div class="streetFighter ' + this.setCharacter() + '"></div>');
    // this.$node = $(`<div class="streetFighter ${this.setCharacter()}'"></div>'`);
    MakeDancer.prototype.setPosition.call(this, top, left);
  }
  
  step() {
  }
  
  setCharacter() {
    var classArray = ['sFighter0', 'sFighter1', 'sFighter2', 'sFighter3'];
    var rand = Math.floor(Math.random() * 3);
    return classArray[rand];
  }
};