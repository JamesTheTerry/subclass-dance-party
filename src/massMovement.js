
window.lineup = function(theseDancers) {
  let dancers = theseDancers || window.dancers;
  
  let y = ($(document).height() / 2) - 10;
  let width = ($(document).width() - 50) / dancers.length;
  
  for (let i = 0; i < dancers.length; i++) {
    const x = width * (i + 1);
    const thisDancer = dancers[i];
    thisDancer.setPosition(y, x);
  }
};