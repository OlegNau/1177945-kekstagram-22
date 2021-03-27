const getData = (onSuccess, onFail) => {
  fetch('https://22.javascript.pages.academy/kekstagram/data')
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Произошла ошибка при загрузке данных')
    }
  })
  .then((pictures) => {
    onSuccess(pictures);
  })
  .catch((error) => {
    onFail(error);
  });
};

const sendData = (onSuccess, onFail, body) => {
  fetch('https://22.javascript.pages.academy/kekstagram',
  {
    method: 'POST',
    body,
  },
)
  .then((response) => {
    if (response.ok) {
      onSuccess()
    } else {
      throw new Error('Произошла ошибка при отправке данных');
    }
  })
    .catch(() => {
      onFail();
    });
};

export { getData, sendData }
