import './util.js'
import './images.js'
import './big-picture.js'
import './overlay.js'
import './scale.js'
import './effects.js'
import './validation.js'
import './server.js'
import {getData} from './server.js';
import {createPictures} from './images.js';

getData ((pictures) => {
  createPictures(pictures);
});
