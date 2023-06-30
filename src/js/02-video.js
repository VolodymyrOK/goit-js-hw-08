import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
// console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(saveTime).catch(function (error) {
  switch (error.name) {
    case 'RangeError':
      alert('Playback error.Reload the page.');
      break;

    default:
      alert('Playback error. Press the play button.');
      break;
  }
});

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));
