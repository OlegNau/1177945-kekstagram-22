import {isEscEvent, isEnterEvent} from './util.js';

const bigPicture = document.querySelector(`.big-picture`);

const openBigPicture = () => {
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });
};

const onSmallPicture.addEventListener('click', (evt) => {
    openBigPicture();
});

const createBigPicture = (photo) => {
  bigPicture.querySelector('.big-picture__img').querySelector(`img`).src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
};
