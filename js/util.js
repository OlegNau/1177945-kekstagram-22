const getRandomValue = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let maxLength = 1;
let str = 'abvgde';

const isStringLengthAvailable = function (str, maxLength) {
  return str.length <= maxLength;
};

isStringLengthAvailable(str, maxLength);

const getRandomArrayElement = (elements) => {
  return elements[getRandomValue(0, elements.length - 1)];
};

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

export {getRandomValue, getRandomArrayElement, isEscEvent};
