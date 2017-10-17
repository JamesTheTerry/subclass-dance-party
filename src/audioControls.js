$(document).ready(function() {
  window.playPauseToggle = function () {
    let music = $('#fightMusic')[0];
    music.paused ? music.play() : music.pause();
  };

  console.log($('#icon'));
  $('#icon').click(function () {
    playPauseToggle();
  });

  // document.getElementById('icon').addEventListener('click', function() {
  //   console.log('start');
  //   let music = $('#fightMusic');
  //   music.paused ? music.play() : music.pause();
  //   console.log('end');  
  // });
});