import {isEscEvent, isEnterEvent, quantityComments, getRandomValue} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const сloseBigPicture = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  fillBigPicture(photo);
  createComments(photo) ;
  document.body.classList.add('modal-open');

  const onEscPress = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      document.removeEventListener('keydown', onEscPress);
    }
  }
  document.addEventListener('keydown', onEscPress);
};

сloseBigPicture.addEventListener('click') {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');

  const onEnterPress = (evt) => {
    if (isEnterEvent(evt)) {
      evt.preventDefault();
      bigPicture.classList.remove('hidden');
      document.removeEventListener('keydown', onEnterPress);
    }
  }
  document.addEventListener('keydown', onEnterPress);
};

const fillBigPicture = (photo) => {
  bigPicture.querySelector('.big-picture__img').querySelector(`img`).src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
};

const createComments = (photo) => {
  for (let i=0; i < quantityComments; i++) {
    let elementComment = document.createElement('li')
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


