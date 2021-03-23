/* global noUiSlider:readonly */

const buttonRadioEffect = document.querySelectorAll('.effects__radio');
const imgPreview = document.querySelector('.img-upload__preview > img');
const uploadSlider = document.querySelector('.effect-level__slider');

const effectLevelRange = document.querySelector('.effect-level')

const getEffectFunction = (type) => {
  switch (type) {

    case 'chrome': {
      return (value) => `grayscale(${value})`
    }
    case 'sepia': {
      return (value) => `sepia(${value})`
    }
    case 'marvin': {
      return (value) => `invert(${value * 100}%)`
    }
    case 'phobos': {
      return (value) => `blur(${value * 3}px)`
    }
    case 'heat': {
      return (value) => `brightness(${value * 3})`
    }
    default: {
      return () => 'none';
    }
  }
}
let currentEffectType = 'none';

for (let i = 0; i < buttonRadioEffect.length; i++) {
  buttonRadioEffect[i].addEventListener('change', function (e) {
    if (e.target.value === 'none') {
      effectLevelRange.style.display = 'none';
    } else {
      effectLevelRange.style.display = 'block';
    }

    imgPreview.classList.remove('effects__preview--' + currentEffectType);
    imgPreview.classList.add('effects__preview--' + e.target.value);
    currentEffectType = e.target.value;
    uploadSlider.noUiSlider.set(1);
  })
}

noUiSlider.create(uploadSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const setImageEffect = (effect, value) =>  {
  const getEffectValue = getEffectFunction(effect);
  const effectValue = getEffectValue(value);
  imgPreview.style.filter = effectValue;
}

uploadSlider.noUiSlider.on('update', (values, handle) => {
  setImageEffect(currentEffectType, values[handle]);
});

effectLevelRange.style.display = 'none';
