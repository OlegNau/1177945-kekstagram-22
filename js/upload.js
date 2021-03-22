import {isEscEvent} from './util.js';

const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const buttomUploadCancel = document.querySelector('#upload-cancel');

const showUploadOverlay = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onOverlayEscKeydown);
  buttomUploadCancel.addEventListener('click', onOverlayButtonClick);
}


const closeUploadOverlay = () => {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.addEventListener('keydown', onOverlayEscKeydown);
  buttomUploadCancel.addEventListener('click', onOverlayButtonClick);
}

const onOverlayEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();
    imgUploadOverlay.classList.add('hidden');
    closeUploadOverlay()
  }
}

const onOverlayButtonClick = () => {
  closeUploadOverlay();
}

buttomUploadCancel.addEventListener('click', closeUploadOverlay);

uploadFile.addEventListener('change', function () {
  showUploadOverlay();
});
