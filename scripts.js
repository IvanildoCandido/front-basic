document.addEventListener('DOMContentLoaded', function () {
  const data = [];
  const loading = document.querySelector('.loading');
  loading.style.display = 'flex';
  fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic')
    .then((response) => response.json())
    .then((result) => createImage(result))
    .then(() => {
      showInfo();
      loading.style.display = 'none';
    });
});

const createImage = (data) => {
  const container = document.querySelector('.feed');
  data.map(
    (item) =>
      (container.innerHTML += `
      <a href="${
        item.link
      }" target="_blank" class="feed-image" style="background-image: url(${
        item.imagens.thumbnail.url
      });">
        <div class="info-user">
          <span>@${item.usuario.username}</span>
          <i class="fas fa-heart">${' ' + item.upvotes}</i>
          <i class="fas fa-comment">${' ' + item.comentarios}</i>
          <i class="fas fa-calendar-alt">${
            ' ' + moment(item.criadoEm).locale('pt-br').format('l LT')
          }</i>
        </div>
      </a>
      `),
  );
};

const showInfo = () => {
  const images = document.querySelectorAll('.feed-image');
  console.log(images);
  images.forEach((image) =>
    image.addEventListener('mouseover', (e) => {
      e.target.querySelector('.info-user').style.display = 'flex';
    }),
  );
  images.forEach((image) =>
    image.addEventListener('mouseleave', (e) => {
      e.target.querySelector('.info-user').style.display = 'none';
    }),
  );
};
