import {isEscEvent, isEnterEvent, getRandomValue} from './util.js';

const bigPicture = document.querySelector('.big-picture');
const bottomCloseBigPicture = document.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');
  fillBigPicture(photo);
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

const сloseBigPicture = () => {
  CloseBigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

bottomCloseBigPicture.addEventListener('click' () => {сloseBigPicture();
});


const fillBigPicture = (photo) => {
  bigPicture.querySelector('.big-picture__img').querySelector(`img`).src = photo.url;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.comments-count').textContent = photo.comments.length;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  createComments(photo);
};

const createComments = (photo) => {
  for (let i=0; i < photo.comments.length; i++) {
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


