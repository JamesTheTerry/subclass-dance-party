window.StreetFighterDancer = class StreetFighterDancer extends MakeDancer {
  constructor(top, left, timeBetweenSteps) {
    // console.log('1');
    super(top, left, timeBetweenSteps);
    this.$node = $('<div class="streetFighter ' + this.setCharacter() + '"></div>');
    MakeDancer.prototype.setPosition.call(this, top, left);
    $(this.$node).click(function() {
      $(this).toggleClass('grow');
    });
  }
  
  step() {
    // MakeDancer.prototype.step.call(this);
  }
  
  setCharacter() {
    var classArray = ['sFighter0', 'sFighter1', 'sFighter2', 'sFighter3', 'sFighter4', 'sFighter5', 'sFighter6', 'sFighter7', 'sFighter8', 'sFighter9', 'samus'];
    var rand = Math.floor(Math.random() * 11);
    return classArray[rand];
  }
};