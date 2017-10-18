
window.lissajousCurve = function(offset) {
  offset = offset || 0;
  
  let c = {};
  c.x = $(window).width() / 2;
  c.y = $(window).height() / 2;
  
  let A = 5;
  let B = 4;
  
  let t = offset;
  console.log(dancers);
      // wierd bug, needs to be 1 less than the length
  for (let i = 0; i < dancers.length - 1; i++) {
    let dancer = dancers[i];
    
    let x = 100 * A * Math.cos(A * (t + i));
    let y = 125 * B * Math.sin(B * (t + i));
  
    // set them relative to the center of the screen
    x += c.x;
    y += c.y;
    
    dancer.setPosition(y, x);
  }  
  
  setTimeout( () => {
    lissajousCurve(offset + 5); // increment the offet by 5
  }, 500);
};
