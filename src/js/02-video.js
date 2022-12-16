import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeo = document.querySelector('#vimeo-player');

const player = new Player(vimeo);

player.on('timeupdate', throttle(function({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log(seconds);
}, 1000));

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
