'use strict';

const container = document.querySelector('.display-data');
const clck = document.querySelector('.clck-btn');

///////////////////////////////////////

const getSongData = function () {
  let inpValue = document.querySelector('.inp_txt').value;

  fetch(`https://itunes.apple.com/search?term=${inpValue}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      song(data);
    });
};

const song = function (data) {
  let html = '';
  data.results.forEach(results => {
    html += `<article class="display">
          <img class="song__img" src="${results.artworkUrl100}" />
          <div class="song__data">
            <h3 class="song__name">${results.trackName}</h3>
            <h4 class="artist__name">${results.artistName}</h4>
            <p class="row"><span>🆔 </span>${results.artistId}</p>
            <p class="row"><span>💰</span>${results.collectionPrice} $</p>
            <p class="row"><span> ⬇</span><a href="${results.trackViewUrl}">Click For More</a></p>
          </div>
          <h4 class="preview"><audio controls>
  <source src="${results.previewUrl}" type="audio/mpeg">
</audio></h4>
        </article>`;
  });
  container.insertAdjacentHTML('beforeend', html);
};

clck.addEventListener('click', getSongData);
