const getRandomValue = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
let maxLength = 1;
let str = 'abvgde';

const isStringLengthAvailable = function (str, maxLength) {
  return str.length <= maxLength;
};

isStringLengthAvailable(str, maxLength);
