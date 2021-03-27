import {isEscEvent, getRandomValue} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bottomCloseBigPicture = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const COMMENTS_QUANTITY = 5;
const commentsLoader = bigPicture.querySelector('.comments-loader');

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  fillBigPicture(photo);
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscPress);
  bottomCloseBigPicture.addEventListener('click', onButtonClick);
};

const сloseBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscPress);
  bottomCloseBigPicture.removeEventListener('click', onButtonClick)
};

const onEscPress = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    сloseBigPicture()
  }
}

const onButtonClick = () => {
  сloseBigPicture();
}

const fillBigPicture = (photo) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  createComments(photo);
};

const createComments = (photo) => {
  for (let i=0; i < photo.comments.length; i++) {
    let elementComment = document.createElement('li');
    elementComment.classList = 'social__comment';
    let autorAvatar = document.createElement('img');
    autorAvatar.classList = 'social__picture';
    autorAvatar.src = 'img/avatar-' + (getRandomValue(1, 6)) + '.svg';
    autorAvatar.alt = 'имя комментатора';
    autorAvatar.width = '35';
    autorAvatar.height = '35';

    let p = document.createElement('p');
    p.classList = 'social__text';
    p.textContent = photo.comments[i].message;

    elementComment.appendChild(autorAvatar);
    elementComment.appendChild(p);
    commentsList.appendChild(elementComment)
  }
};


export { openBigPicture }
