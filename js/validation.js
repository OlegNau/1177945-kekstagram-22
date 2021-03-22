const hashtags = document.querySelector('.text__hashtags');
const textDecription =  document.querySelector('.text__description');
const HASHTAGS_MAX = 20;
const HASHTAGS_MAX_QUANTITY = 5;
const symbolsRange = /^[0-9A-Za-zА-Яа-я]+$/;

const onEscInput = (evt) => {
  if (evt.key === 'Escape' || 'Esc') {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

hashtags.addEventListener('keydown', onEscInput);
textDecription.addEventListener('keydown', onEscInput);

const onHashtagsInput = () => {
  const hashtagElements = hashtags.value.trim().toLowerCase().split(' ');
  if (hashtagElements.length > HASHTAGS_MAX_QUANTITY) {
    hashtags.setCustomValidity('Максимальное колличество хештегов' + HASHTAGS_MAX_QUANTITY);
    return;
    } else {
      hashtagElements.forEach((hashtag) => {
        if (hashtag[0] !== '#') {
        hashtags.setCustomValidity('Хештег обязательно должен содержать #');
      } else if (hashtag.length < 2) {
        hashtags.setCustomValidity('Введите имя хештега');
      } else if (!symbolsRange.test(hashtag)) {
        hashtags.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;');
      } else if (hashtag.length > HASHTAGS_MAX) {
        hashtags.setCustomValidity('максимальная длина одного хэш-тега ' + HASHTAGS_MAX + ' символов, включая решётку');
      } else if (hashtagElements.length !== new Set(hashtagElements).size) {
        hashtags.setCustomValidity('Хэштеги не могут повторяться');
      } else {
        hashtags.reportValidity('');
      }
    });
  }
  hashtags.reportValidity();
};

hashtags.addEventListener('input', onHashtagsInput);


