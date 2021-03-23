const STEP = 25;
const MIN_SCALE = STEP;
const MAX_SCALE = 100;
const CURRENT_SCALE = 100;
let currentScale = CURRENT_SCALE;

const buttonScaleSmaller = document.querySelector('.scale__control--smaller');
const buttonScaleBigger = document.querySelector('.scale__control--bigger');
const scaleControl = document.querySelector('.scale__control--value');
const imgPreviewContainer = document.querySelector('.img-upload__preview');

const onScaleSmaller = () => {
  if (currentScale > MIN_SCALE && currentScale <= MAX_SCALE) {
    currentScale -= STEP;
    scaleControl.value = currentScale + '%';
    imgPreviewContainer.style.transform = 'scale(' + currentScale/MAX_SCALE + ')';
  }
};

const onScaleBigger = () => {
  if (currentScale >= MIN_SCALE && currentScale < MAX_SCALE) {
    currentScale += STEP;
    scaleControl.value = currentScale + '%';
    imgPreviewContainer.style.transform = 'scale(' + currentScale/MAX_SCALE + ')';
  }
};


buttonScaleSmaller.addEventListener('click', onScaleSmaller);
buttonScaleBigger.addEventListener('click', onScaleBigger);
