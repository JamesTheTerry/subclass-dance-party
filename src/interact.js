// [X] get them together
// [ ] use css transformations to have them move at each other
// [ ] change background

window.interact = function() {
  let dancers = window.dancers;
  
  $('#fightMusic')[0].play();
  
  var fighters = _.filter(dancers, function(dancer) {
    return $(dancer.$node).hasClass('streetFighter');
  });
  
  while (fighters.length < 8) {
    var dancer = new StreetFighterDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    fighters.push(dancer);
    $('body').append(dancer.$node);
  }
  
  // loop through them in pairs
  for (let i = 0; i < fighters.length && i < 8; i += 2) {
    let alpha = fighters[i];
    let bravo = fighters[i + 1];
    let width = $(document).width();
    let height = $(document).height();
    
    // set alpha fighters to have an alpha class for identification
    $(alpha.$node).addClass('alpha');
    // set bravo fighters to have a bravo class for identification
    $(bravo.$node).addClass('bravo');
      
    let bracket = width / 4;
    
    let x = i / 2 * bracket + (bracket / 3);
    
    alpha.setPosition(100, x);
    
    x += bracket / 3;
    
    bravo.setPosition(100, x);
  }
  
  // // line up the spectators
  // let spectators = _.filter(dancer, (dancer) => {
  //   // error: nothing is getting added
  //   return dancers.indexOf(dancer);
  // });
  // console.log(spectators);
  // if (spectators.length > 0) {
  //   console.log('spectators', spectators);
  //   window.lineup(spectators);
  // }
  
  setInterval(() => {
    $('.alpha').toggleClass('leftFighter');
    $('.bravo').toggleClass('rightFighter');
  }, 500);
};