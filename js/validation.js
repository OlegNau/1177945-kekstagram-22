const hashtagElements = document.querySelector('.text__hashtags');
const textDecription =  document.querySelector('.text__description');
const HASHTAGS_MAX = 20;
const HASHTAGS_MAX_QUANTITY = 5;
const symbolsRange = /^#[0-9A-Za-zА-Яа-я]+$/;

const onEscInput = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

hashtagElements.addEventListener('keydown', onEscInput);
textDecription.addEventListener('keydown', onEscInput);

const onHashtagsInput = () => {
  const hashtags = hashtagElements.value.trim().toLowerCase().split(' ');
  if (hashtagElements.length > HASHTAGS_MAX_QUANTITY) {
    return hashtagElements.setCustomValidity('Максимальное колличество хештегов' + HASHTAGS_MAX_QUANTITY);
  }
  for (const hashtag of hashtagElements) {
    if (hashtag[0] !== '#') {
      return hashtagElements.setCustomValidity('Хештег обязательно должен содержать #');
    } else if (hashtag.length < 2) {
      return hashtagElements.setCustomValidity('Введите имя хештега');
    } else if (!symbolsRange.test(hashtag)) {
      return hashtagElements.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;');
    } else if (hashtag.length > HASHTAGS_MAX) {
      return hashtagElements.setCustomValidity('максимальная длина одного хэш-тега ' + HASHTAGS_MAX + ' символов, включая решётку');
    } else if (hashtags.length !== new Set(hashtags).size) {
      return  hashtagElements.setCustomValidity('Хэштеги не могут повторяться');
    }
  }
  hashtagElements.setCustomValidity();
};

hashtagElements.addEventListener('input', onHashtagsInput);


