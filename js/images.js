import {createDescriptionPhoto} from './data.js'

const picturesContainer = document.querySelector('.pictures')
const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.pictures');

const similarPhotos = createDescriptionPhoto(25);

const similarListFragment = document.createDocumentFragment();

similarPhotos.forEach((picture) => {
  const photoElement = templatePicture.cloneNode(true);
  photoElement.querySelector('.picture__img').src = picture.url;
  photoElement.querySelector('.picture__likes').textContent = picture.likes;
  photoElement.querySelector('.picture__comments').textContent = picture.comments.length;
  similarListFragment.appendChild(photoElement);
});

picturesContainer.appendChild(similarListFragment);

