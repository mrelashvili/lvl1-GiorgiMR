'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// const inpValue = document.querySelector('.inp_txt').value;
// const clck = document.querySelector('.clck-btn');

///////////////////////////////////////

const getSong = function (data) {
  const html = `<article class="display">
          <img class="song__img" src="${data.results[1].artworkUrl100}" />
          <div class="song__data">
            <h3 class="song__name">${data.results[1].trackName}</h3>
            <h4 class="artist__name">${data.results[1].artistName}</h4>

            <p class="row"><span>🆔 </span>${data.results[1].artistId}</p>
            <p class="row"><span>💰</span>${data.results[1].collectionPrice} $</p>
            <p class="row"><span> ⬇</span><a href="${data.results[1].trackViewUrl}">Click For More</a></p>
          </div>
          <h4 class="preview"><audio controls>
  <source src="${data.results[1].previewUrl}" type="audio/mpeg">
</audio></h4>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// getSong('Rihanna');

const getSongData = function (artistName) {
  fetch(`https://itunes.apple.com/search?term=${artistName}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      getSong(data);
    });
};

getSongData('Queen');
getSongData('The beatles');
