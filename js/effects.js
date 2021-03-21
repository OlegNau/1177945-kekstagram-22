/* global noUiSlider:readonly */

const buttonRadioEffect = document.querySelectorAll('.effects__radio');
const imgPrewiew = document.querySelector('.img-upload__preview > img');
const imageUploadEffectLevel = document.querySelector('.img-upload__effect-level');
const uploadSlider = document.querySelector('.effect-level__slider');

const effects = [
  'effects__preview--none',
  'effects__preview--chrome',
  'effects__preview--sepia',
  'effects__preview--marvin',
  'effects__preview--phobos',
  'effects__preview--heat',
];

for (let i = 0; i < buttonRadioEffect.length; i++) {
  buttonRadioEffect[i].addEventListener('click', function() {
    removeEffects();
    imgPrewiew.classList.add(effects[i])
  })
};

const removeEffects = function () {
  imgPrewiew.classList.remove(...effects);
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

uploadSlider.noUiSlider.on('update', (values, handle) => {
  valueElement.value = values[handle];
});

buttonRadioEffect[0].addEventListener('change', (evt) => {
  if (evt.target.checked) {
    uploadSlider.style.display = 'none';
    imgPrewiew.style.filter = 'none';
  }
});

buttonRadioEffect[1].addEventListener('change', (evt) => {
  if (evt.target.checked) {
    uploadSlider.style.display = 'block';
    uploadSlider.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1
    })
}});
