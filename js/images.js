import {openBigPicture} from './big-picture.js';

const picturesContainer = document.querySelector('.pictures')
const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPictures = (pictures) => {
const similarListFragment = document.createDocumentFragment();

pictures.forEach((picture) => {
  const photoElement = templatePicture.cloneNode(true);
  photoElement.querySelector('.picture__img').src = picture.url;
  photoElement.querySelector('.picture__likes').textContent = picture.likes;
  photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
  photoElement.addEventListener('click', () => openBigPicture(picture));
  similarListFragment.appendChild(photoElement);
});

picturesContainer.appendChild(similarListFragment);
};

export {createPictures};
