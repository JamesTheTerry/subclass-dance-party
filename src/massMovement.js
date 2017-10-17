
window.lineup = function() {
  console.log(window.dancers);
  let dancers = window.dancers;
  
  let y = ($(document).height() / 2) - 10;
  let width = ($(document).width() - 50) / dancers.length;
  // width = $(document).width() - width;
  
  for (let i = 0; i < dancers.length; i++) {
    // debugger;
    const x = width * (i + 1);
    const thisDancer = dancers[i];
    console.log('x', x);
    thisDancer.setPosition(y, x);
  }
  
  
};