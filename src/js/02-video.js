import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeo = document.querySelector('#vimeo-player');

const player = new Player(vimeo);

const _ = require('lodash.throttle');

const throttled = throttle(foo, 1000);

player.on('timeupdate', throttled);

function foo({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log(seconds);
}

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
