// [ ] get them together
// [ ] use css transformations to have them move at each other
// [ ] change background

window.interact = function() {
  console.log(window.dancers);
  let dancers = window.dancers;
  
  while (dancers.length < 8) {
    var dancer = new StreetFighterDancer(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  }
  
  // loop through them in pairs
  for (let i = 0; i < dancers.length && i < 8; i += 2) {
    let alpha = dancers[i];
    let bravo = dancers[i + 1];
    let width = $(document).width();
    let height = $(document).height();
      
    let bracket = width / 4;
    
    
    
    let x = i / 2 * bracket + (bracket / 3);
    
    alpha.setPosition(100, x);
    
    x += bracket / 3;
    
    bravo.setPosition(100, x);
    
  }
};