"use strict";
////////////////////////////

const container = document.querySelector(".main__container--bottom");
const four = document.querySelector(".vertical-line-four");
const three = document.querySelector(".vertical-line-three");
const two = document.querySelector(".vertical-line-two");
const layout = document.querySelector(".fa-table");
const full_line = document.querySelector(".fa-list-ul");

///////////////////////////////////////

const getData = function (amount, num) {
  fetch(`https://fakestoreapi.com/products?limit=${amount}`)
    .then((res) => res.json())
    .then((data) => info(data, num));
};

const info = function (data, num) {
  data.forEach((results) => {
    console.log(results);
    container.innerHTML += `
    <div class='col col-lg-${num} col-md-4 col-sm-6'>
          <div class='card'>
    <img class="card-img-top image-card" src="${results.image}" alt="Card image cap">

      <div class='card-body'>
          <div>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
          </div>
          
      <div class="product__descr">
       <p>${results.title}</p>
      </div>
      <div class="product__price">
        <h2>$${results.price}</h2>
      </div>
      </div>

              </div>
              </div>`;
  });
};

// clck.addEventListener("click", () => {
//   container.innerHTML = "";
//   getData(10);
// });

layout.addEventListener("click", () => {
  container.innerHTML = "";
  getData(12);
});

const info2 = function (data) {
  data.forEach((results) => {
    console.log(results);
    container.innerHTML += `
    <div class='row'>
          <div class='card col-lg-2'>
    <img class="card-img-top image-card full-line-img" src="${results.image}" alt="Card image cap">
        </div>
      <div class='card-body col-lg-2 col-md-4'>
          <div>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
          </div>
          
      <div class="product__descr col-lg-12 col-md-8">
       <p>${results.description}</p>
      </div>
      <div class="product__price">
        <h2>$${results.price}</h2>
      </div>
      </div>

              </div>
              </div>`;
  });
};
const gotData = function (amount, num) {
  fetch(`https://fakestoreapi.com/products?limit=${amount}`)
    .then((res) => res.json())
    .then((data) => info2(data, num));
};

full_line.addEventListener("click", () => {
  container.innerHTML = "";
  gotData(12);
});

three.addEventListener("click", () => {
  container.innerHTML = "";
  getData(12, 4);
});

four.addEventListener("click", () => {
  container.innerHTML = "";
  getData(12, 3);
});

two.addEventListener("click", () => {
  container.innerHTML = "";
  getData(12, 6);
});
