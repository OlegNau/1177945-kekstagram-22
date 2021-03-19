const STEP = 25;
const MIN_SCALE = STEP;
const MAX_SCALE = 100;
const CURRENT_SCALE = '100%';
const currentScale = CURRENT_SCALE;

const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

scaleControlValue = currentScale;

const onScaleSmaller = () => {
  if (currentScale > MIN_SCALE && currentScale <= MAX_SCALE) {
    currentScale -= STEP;
    scaleControlValue.value = currentScale + '%';
    imgPreview.style.transform = 'scale(currentScale/MAX_SCALE)';
  }
};

buttonScaleSmaller.addEventListener('click', onScaleSmaller);
