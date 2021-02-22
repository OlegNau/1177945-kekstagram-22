'use strict';

import {getRandomValue, getRandomArrayElement} from './util.js';

//Новое дз

const COMMENTS  = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const quantityComments = {
  MIN: 1,
  MAX: 3};

const LIKES = {
  MIN: 15,
  MAX: 200};

const PHOTOINFO = ['Мы с колбасятиной едем путешествовать',
  'Кот Пельмень',
  'Катюха пилит Леху',
  'Кто не работает- тот ест',
  'Пытаюсь понять почему люди не хотят быть грачами',
  'Пылесос засосал хомяка'];

const NAMES = ['Ганс',
  'Герман',
  'Адольф',
  'Урсула',
  'Вольфганг',
  'Рудольф'];

const SIMILAR_PHOTOINFO_COUNT = 25;

const createDescriptionPhoto = (similarPhotoInfoCount) => {
  let newDescriptions = [];
  for (let i = 0; i < similarPhotoInfoCount; i++) {
    newDescriptions[i] = {
      id: i+1,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomArrayElement(PHOTOINFO),
      likes: getRandomValue(LIKES.MIN,LIKES.MAX),
      comments: createComments(getRandomValue(quantityComments.MIN,quantityComments.MAX))};
  }
  return newDescriptions
};

const createComments = (commentsCount) => {
  let newComment = [];
  for (let i = 0; i < commentsCount; i++) {
    newComment[i] = {
      id: i+1,
      avatar: 'img/avatar-' + (getRandomValue(1, 6)) + '.svg',
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(NAMES)};
  }
  return newComment;
};

// eslint-disable-next-line
console.log(createDescriptionPhoto(SIMILAR_PHOTOINFO_COUNT));
