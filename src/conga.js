
window.conga = function(offset) {
  
  offset = offset || 0;
  
  let c = {};
  c.x = $(window).width() / 2;
  c.y = $(window).height() / 2;
  c.radius = 500; // may alter this later
  
  let circumference = 2 * Math.PI * c.radius;
  let arcLength = circumference / dancers.length;
  
  c.angle = arcLength / circumference * 360;
  
  let currentAngle = c.angle;
  
  currentAngle += offset;
  
  for (let i = 0; i < dancers.length; i++) {
    let dancer = dancers[i];
    let x = Math.cos(currentAngle) * c.radius;
    x += c.x; // to make it relative to the screen's center
    
    let y = Math.sin(currentAngle) * c.radius;
    y += c.y; // to make it relative to the screen's center
    
    dancer.setPosition(y, x);
    
    currentAngle -= c.angle; // update the angle
    // going clockwise
  }
  
  setTimeout( () => {
    console.log(dancers);
    conga(offset + 5); // move 5 degrees
  }, 500);
  
};
