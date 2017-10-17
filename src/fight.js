// [X] get them together
// [X] use css transformations to have them move at each other
// [X] change background

window.fight = function() {
  let dancers = window.dancers;
  
  // plays the theme song when the "FIGHT" button is clicked
  // $('#fightMusic')[0].play();
  
  // the funciton is not getting properly accessed here
  // window.playPauseToggle();
  
  // since it is only 2 lines, the code for the function is here
  playPauseToggle();
  
  if (window.fighters === undefined) {
    // select the fighters from the dancers array
    window.fighters = _.filter(dancers, function(dancer) {
      return $(dancer.$node).hasClass('streetFighter');
    });
    
    // only take the first 8 fighers
    if (fighters.length > 7) {
      fighters.splice(0, 8);
    }
    
    // if there are not enough fighters, make some more
    while (fighters.length < 8) {
      var dancer = new StreetFighterDancer(
        $('body').height() * Math.random(),
        $('body').width() * Math.random(),
        Math.random() * 1000
      );
      fighters.push(dancer);
      $('body').append(dancer.$node);
      
      // append to dancers for the spectator accumulation below
      dancers.push(dancer);
    }    
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

    // the space in which the 'fight'      
    let bracket = width / 4;
    
    let x = i / 2 * bracket + (bracket / 3);
    
    alpha.setPosition(100, x);
    
    x += bracket / 3;
    
    bravo.setPosition(100, x);
  }
  
  // line up the spectators
  let spectators = _.filter(dancers, (dancer) => {
    return !_.contains(fighters, dancer);
  });
  
  window.lineup(spectators);
  
  startFighting();
};

let startFighting = _.once(() => {
  setInterval(() => {
    $('.alpha').toggleClass('leftFighter');
    $('.bravo').toggleClass('rightFighter');
  }, 500);
});



