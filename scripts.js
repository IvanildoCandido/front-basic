document.addEventListener('DOMContentLoaded', function () {
  const data = [];
  fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic')
    .then((response) => response.json())
    .then((result) => createImage(result));
});

const createImage = (data) => {
  const container = document.querySelector('.feed');
  data.map(
    (item) =>
      (container.innerHTML += `<img class=".img-fluid" src="${item.imagens.thumbnail.url}">`),
  );
};
